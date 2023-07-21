import { NextApiRequest, NextApiResponse } from "next";

import { auth, googleAuth } from "@struct/api/src/lucia";
import { prisma } from "@struct/db";

import { cors } from "~/utils/cors";
import { env } from "~/env.mjs";

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  cors(res);
  const authRequest = auth.handleRequest({ req: request, res });

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
  console.log(url.toString());

  // validate state
  console.log("storedState", storedState);
  console.log("state", state);
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
            auth_key: true,
          },
        })
        .catch(() => null);

      const email = providerUser.email;
      if (!email) throw new Error("Email not provided");
      if (dbUser) {
        if (!dbUser.auth_key.find((key) => key.id.startsWith("google:")))
          await auth.createKey(dbUser.id, {
            type: "persistent",
            providerId: "google",
            password: null,
            providerUserId: email,
          });

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
    };

    const user = await getUser();
    const session = await auth.createSession(user.id);

    // set session cookie
    authRequest.setSession(session);

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
    console.log(e);
    res.redirect(failureRedirectUrl);
    return;
  }
};

export default handler;
