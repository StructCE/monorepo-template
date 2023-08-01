// auth/lucia.ts
import {prisma} from "@lucia-auth/adapter-prisma";
import {lucia} from "lucia";
import { nextjs } from "lucia/middleware";

import "lucia-auth/polyfill/node";

import { prisma as prismaDb } from "@struct/db";

export const auth = lucia({
  adapter: prisma(prismaDb),
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV", // "PROD" if prod
  middleware: nextjs(),
  getUserAttributes(databaseUser) {
    return databaseUser
  },
});

export type Auth = typeof auth;
