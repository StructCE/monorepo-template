// auth/lucia.ts
import { prisma } from "@lucia-auth/adapter-prisma";
import { lucia } from "lucia";
import { nextjs } from "lucia/middleware";

import "lucia/polyfill/node";

import { prisma as prismaDb } from "@struct/db";

export const auth = lucia({
  adapter: prisma(prismaDb),
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV", // "PROD" if prod
  middleware: nextjs(),
  getUserAttributes(databaseUser) {
    return {
      email: databaseUser.email,
      emailVerified: databaseUser.emailVerified,
    };
  },
});

export type Auth = typeof auth;
