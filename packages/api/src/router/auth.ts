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
          password: z.string().min(6),
          passwordConfirmation: z.string().min(6),
        })
        .refine((inp) => inp.password === inp.passwordConfirmation, {
          message: "Password must be equal to its confirmation.",
        }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const prismaUser = await ctx.prisma.authUser
          .findUnique({
            where: {
              email: input.email,
            },
            select: {
              id: true,
              email: true,
              username: true,
            },
          })
          .catch(() => null);

        if (!prismaUser) {
          return await ctx.auth.createUser({
            primaryKey: {
              providerId: "email",
              providerUserId: input.email,
              password: input.password,
            },
            attributes: {
              email: input.email,
            },
          });
        }

        await ctx.auth.createKey(prismaUser.id, {
          type: "persistent",
          providerId: "email",
          providerUserId: input.email,
          password: input.password,
        });

        return prismaUser;
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
    return ctx.auth.invalidateSession(ctx.userInfo.session.sessionId);
  }),

  getUser: protectedProcedure.mutation(({ ctx }) => {
    return ctx.userInfo.user;
  }),

  startOAuthSignIn: publicProcedure
    .input(z.enum(["google", "github"]))
    .mutation(async ({ ctx, input }) => {
      if (ctx.userInfo.session) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already signed in",
        });
      }

      const [url, oauth_state] = await ctx.authMethods[
        input
      ].getAuthorizationUrl();

      // to later verify the state is correct on server
      ctx.requestInfo.res.setHeader(
        "Set-Cookie",
        `oauth_state=${oauth_state}; Path=/; Max-Age=${
          10 * 60 // in seconds
        }; HttpOnly; ${process.env.NODE_ENV === "production" ? "Secure" : ""}`,
      );

      return {
        url: url.toString(),
      };
    }),

  signIn: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.userInfo.session) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Already signed in",
        });
      }

      const key = await ctx.auth
        .useKey("email", input.email, input.password)
        .catch((e) => {
          const error = e as LuciaError;
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

          // database connection error
          // console.log(error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Unexpected server error",
          });
        });

      const session = await ctx.auth.createSession(key.userId);

      return {
        user: await ctx.auth.getUser(session.userId),
        session: session,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @struct/auth package
    return "you can see this secret message!";
  }),
});
