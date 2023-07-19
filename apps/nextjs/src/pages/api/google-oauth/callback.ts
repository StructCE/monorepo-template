import { NextApiRequest, NextApiResponse } from "next";

import { auth, googleAuth } from "@struct/api/src/lucia";
import { prisma } from "@struct/db";

import { cors } from "~/utils/cors";

const handler = async (request: NextApiRequest, res: NextApiResponse) => {
  cors(res);

  const failureRedirectUrl = "/oauth/error";
  const successRedirectUrl = "/oauth/success";

  const session = await auth
    .validateSession((request.headers["auth_session"] as string) || "")
    .catch(() => null);
  console.log("UM");

  if (session) {
    // already signed in
    return res.redirect(failureRedirectUrl);
  }
  console.log("DOIS");

  const storedState = request.headers["oauth_state"];
  console.log("storedState", storedState);

  const url = new URLSearchParams(request.url ?? "");
  const state = url.get("state");
  const code = url.get("code");
  // validate state
  console.log("storedState", storedState);
  if (!code) {
    res.redirect(failureRedirectUrl);
    return;
  }
  console.log("TRES");
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
      if (dbUser) return dbUser;

      console.log(providerUser);
      const email = providerUser.email;
      if (!email) throw new Error("Email not provided");
      // if (!providerUser.email_verified) throw new Error("Email not verified");
      const user = await createUser({
        email: email,
        username: providerUser.name,
      });
      return user;
    };

    const user = await getUser();
    const session = await auth.createSession(user.id);

    const redirectUrl = new URL(successRedirectUrl, "http://localhost:3000");

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
