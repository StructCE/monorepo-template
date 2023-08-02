import { NextApiRequest, NextApiResponse } from "next";
import { isWithinExpiration } from "lucia/utils";

import { prisma } from "@struct/db";

const validateEmailVerificationToken = async (token: string) => {
  const storedToken = await prisma.emailVerificationToken.findUnique({
    where: {
      id: token,
    },
  });
  if (!storedToken) {
    throw new Error("Invalid token");
  }
  const tokenExpires = Number(storedToken.expires); // bigint => number conversion
  if (!isWithinExpiration(tokenExpires)) {
    throw new Error("Expired token");
  }
  return storedToken.user_id;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { token } = req.query;

  if (!token) {
    res.status(400).json({ error: "Missing token" });
    return;
  }

  try {
    const userId = await validateEmailVerificationToken(token as string);
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        emailVerified: true,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
      return;
    }
    res.status(400).json({ error: "Invalid token" });
  }

  res.redirect("/login");
}
