// auth/lucia.ts
import prisma from "@lucia-auth/adapter-prisma";
import lucia from "lucia-auth";
import { nextjs } from "lucia-auth/middleware";

import { env } from "../../env.mjs";

import "lucia-auth/polyfill/node";

import { google } from "@lucia-auth/oauth/providers";

import { prisma as prismaDb } from "@struct/db";

export const auth = lucia({
  adapter: prisma(prismaDb),
  env: process.env.NODE_ENV === "production" ? "PROD" : "DEV", // "PROD" if prod
  middleware: nextjs(),
  transformDatabaseUser: (userData) => {
    return userData;
  },
});

export const googleAuth = google(auth, {
  scope: [
    /* See more about scopes: https://developers.google.com/identity/protocols/oauth2/scopes#oauth2
      Lucia Auth already gets .profile as a default.
      Next scope is needed to get the user's email, guaranteeing unique users in the database.
    */
    "https://www.googleapis.com/auth/userinfo.email",
  ],
  clientId: env.WEB_GOOGLE_CLIENT_ID,
  clientSecret: env.WEB_GOOGLE_CLIENT_SECRET,
  redirectUri: env.WEB_OAUTH_DEFAULT_REDIRECT_URL,
});

export type Auth = typeof auth;
