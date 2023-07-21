import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

import { auth, googleAuth } from "@struct/api/src/lucia";
import { prisma } from "@struct/db";

import { cors } from "~/utils/cors";
import { env } from "~/env.mjs";

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  cors(res);

  const failureRedirectUrl = "/oauth/error";
  const successRedirectUrl = "/oauth/success";

  const session = await auth
    .validateSession((request.headers["auth_session"] as string) || "")
    .catch(() => null);

  if (session) {
    // already signed in
    return res.redirect(failureRedirectUrl);
  }

  const serverSideCookies = cookies();

  const storedState = serverSideCookies.get("oauth_state")?.value;

  const url = new URLSearchParams(request.url ?? "");
  const state = url.get("state");
  const code = url.get("code");
  // validate state
  console.log("storedState", storedState);
  if (!state || !storedState || storedState !== state || !code) {
    res.redirect(failureRedirectUrl);
    return;
  }

  try {
    const { existingUser, createUser, providerUser } =
      await googleAuth.validateCallback(code);

    const getUser = async () => {
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
          },
        })
        .catch(() => null);

      const email = providerUser.email;
      if (!email) throw new Error("Email not provided");
      if (dbUser) {
        await auth.createKey(dbUser.id, {
          type: "persistent",
          providerId: "google",
          password: null,
          providerUserId: email,
        });
        return dbUser;
      }

      // this createUser automatically creates a key
      const user = await createUser({
        email: email,
        username: providerUser.name,
      });

      return user;
    };

    const user = await getUser();
    const session = await auth.createSession(user.id);

    const redirectUrl = new URL(successRedirectUrl, env.WEB_BASE_URL);

    // needs parsing on the client, so we stringify it
    redirectUrl.searchParams.set("auth_session", session.sessionId);
    redirectUrl.searchParams.set("user", JSON.stringify(user));
    res.redirect(redirectUrl.href);
    return;
  } catch (e) {
    console.log(e);
    res.redirect(failureRedirectUrl);
    return;
  }
};

export default handler;
