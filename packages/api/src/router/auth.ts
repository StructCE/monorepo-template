import { TRPCError } from "@trpc/server";
import { LuciaError } from "lucia-auth";
import { z } from "zod";

import { Prisma } from "@struct/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z
        .object({
          email: z.string().email(),
          username: z.string(),
          password: z.string().min(6),
          passwordConfirmation: z.string().min(6),
        })
        .refine((inp) => inp.password === inp.passwordConfirmation, {
          message: "Password must be equal to its confirmation.",
        }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.auth.createUser({
          primaryKey: {
            providerId: "email",
            providerUserId: input.email,
            password: input.password,
          },
          attributes: {
            username: input.username,
            email: input.email,
          },
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002" &&
          error.message?.includes("email")
        ) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email already in use",
          });
        }
        if (
          error instanceof LuciaError &&
          error.message === "AUTH_DUPLICATE_KEY_ID"
        ) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email already in use",
          });
        }
        // database connection error
        console.log(error);

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unknown server error occurred.",
        });
      }
    }),

  signIn: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const key = await ctx.auth.useKey("email", input.email, input.password);
        const session = await ctx.auth.createSession(key.userId);
        const sessionCookie = ctx.auth.createSessionCookie(session).serialize();

        ctx.authRequest.setSession(session); // NOTE: does not set cookie on mobile app

        return {
          user: await ctx.auth.getUser(session.userId),
          // passing cookie so client may set (needed for mobile app)
          sessionCookie: sessionCookie,
        };
      } catch (e) {
        const error = e as LuciaError;
        if (
          error.message === "AUTH_INVALID_KEY_ID" ||
          error.message === "AUTH_INVALID_PASSWORD"
        ) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Incorrect email or password",
          });
        }

        // database connection error
        // console.log(error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unexpected server error",
        });
      }
    }),

  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    ctx.authRequest.setSession(null); // NOTE: does not clear cookie on mobile app

    return ctx.auth.invalidateSession(ctx.authInfo.session.sessionId);
  }),

  getUser: protectedProcedure.mutation(({ ctx }) => {
    return ctx.authInfo.user;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @struct/auth package
    return "you can see this secret message!";
  }),
});
