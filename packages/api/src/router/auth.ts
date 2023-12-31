import { TRPCError } from "@trpc/server";
import { LuciaError } from "lucia";
import { z } from "zod";

import { Prisma } from "@struct/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { mailer } from "../utils/mailjet";
import { generateEmailVerificationToken } from "../utils/token";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z
        .object({
          email: z.string().email(),
          password: z.string().min(6),
          passwordConfirmation: z.string().min(6),
        })
        .refine((inp) => inp.password === inp.passwordConfirmation, {
          message: "Password must be equal to its confirmation.",
        }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.auth.createUser({
          key: {
            providerId: "email",
            providerUserId: input.email,
            password: input.password,
          },
          attributes: {
            email: input.email,
            emailVerified: false,
          },
        });

        const token = await generateEmailVerificationToken(user.userId);
        await mailer.sendVerificationEmail({
          to: user.email,
          token,
        });

        return user;
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

  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    return ctx.auth.invalidateSession(ctx.session.sessionId);
  }),

  getUser: protectedProcedure.mutation(({ ctx }) => {
    return ctx.session.user;
  }),

  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.session) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already signed in",
        });
      }

      try {
        const key = await ctx.auth.useKey("email", input.email, input.password);

        const user = await ctx.auth.getUser(key.userId);

        if (!user.emailVerified) {
          throw new Error("Email not verified");
        }

        const session = await ctx.auth.createSession({
          userId: key.userId,
          attributes: {},
        });

        return {
          user: user,
          session: session,
        };
      } catch (e) {
        const error = e as Error;
        if (
          error.message === "AUTH_INVALID_KEY_ID" ||
          error.message === "AUTH_INVALID_PASSWORD"
        ) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message:
              "Incorrect email or password. Verify your login method and details.",
          });
        }

        if (error.message === "Email not verified") {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Email not verified",
          });
        }

        // database connection error
        console.log("error", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Unexpected server error",
        });
      }
    }),

  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @struct/auth package
    return "you can see this secret message!";
  }),
});
