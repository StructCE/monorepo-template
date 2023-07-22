import { NextApiRequest, NextApiResponse } from "next";

import { auth, githubAuth, googleAuth } from "@struct/api/src/lucia";
import { prisma } from "@struct/db";

import { cors } from "~/utils/cors";
import { env } from "~/env.mjs";

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  cors(res);

  const { provider } = request.query;

  const failureRedirectUrl = "/oauth/error";
  const successRedirectUrl = "/oauth/success";

  const session = await auth
    .validateSession((request.headers["auth_session"] as string) || "")
    .catch(() => null);

  if (session) {
    // already signed in
    return res.redirect(failureRedirectUrl);
  }

  // get state from cookie we set in startOAuthSignIn
  const cookieStore = request.cookies;
  const storedState = cookieStore["oauth_state"];

  const url = new URL(request.url ?? "", env.WEB_BASE_URL);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  // validate state
  console.log("storedState", storedState);
  console.log("state", state);
  if (!state || !storedState || storedState !== state || !code) {
    res.redirect(failureRedirectUrl);
    return;
  }

  try {
    const getUser = async () => {
      switch (provider) {
        case "google": {
          const {
            existingUser,
            createUser,
            providerUser,
            createPersistentKey,
          } = await googleAuth.validateCallback(code);
          if (existingUser) return existingUser;

          const dbUser = await prisma.authUser
            .findUnique({
              where: {
                email: providerUser.email,
              },
              select: {
                id: true,
                email: true,
                username: true,
                auth_key: true,
              },
            })
            .catch(() => null);

          const email = providerUser.email;
          if (!email) throw new Error("Email not provided");
          if (dbUser) {
            if (!dbUser.auth_key.find((key) => key.id.startsWith("google:")))
              await createPersistentKey(dbUser.id);

            return {
              id: dbUser.id,
              email: dbUser.email,
              username: dbUser.username,
            };
          }

          // this createUser automatically creates a key
          const user = await createUser({
            email: email,
            username: providerUser.name,
          });

          return user;
        }

        case "github": {
          const {
            existingUser,
            providerUser,
            createUser,
            createPersistentKey,
            tokens,
          } = await githubAuth.validateCallback(code);

          if (existingUser) return existingUser;

          const emails: {
            email: string;
            verified: boolean;
            primary: boolean;
          }[] = await fetch("https://api.github.com/user/emails", {
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`,
              "X-GitHub-Api-Version": "2022-11-28",
              Accept: "Accept: application/vnd.github+json",
            },
          }).then((res) => res.json());

          const primaryEmail = emails.find((email) => email.primary);

          if (!primaryEmail) throw new Error("Email not provided");
          // if (!primaryEmail.verified) throw new Error("Email not verified");

          const dbUser = await prisma.authUser
            .findUnique({
              where: {
                email: primaryEmail.email,
              },
              select: {
                id: true,
                email: true,
                username: true,
                auth_key: true,
              },
            })
            .catch(() => null);

          if (dbUser) {
            if (!dbUser.auth_key.find((key) => key.id.startsWith("github:")))
              await createPersistentKey(dbUser.id);

            return {
              id: dbUser.id,
              email: dbUser.email,
              username: dbUser.username,
            };
          }

          // this createUser automatically creates a key
          const user = await createUser({
            email: primaryEmail.email,
            username: providerUser.login,
          });

          return user;
        }
        default:
          // invalid provider
          throw new Error("Invalid provider");
      }
    };

    const user = await getUser();
    const session = await auth.createSession(user.id);

    const redirectUrl = new URL(successRedirectUrl, env.WEB_BASE_URL);

    // communicate session to client
    res.setHeader(
      "Set-Cookie",
      `auth_session=${session.sessionId}; Path=/; SameSite=Strict; Secure`,
    );

    // needs user on the client, so we stringify it
    redirectUrl.searchParams.set("user", JSON.stringify(user));
    res.redirect(redirectUrl.href);
    return;
  } catch (e) {
    console.error(e);
    res.redirect(failureRedirectUrl);
    return;
  }
};

export default handler;
