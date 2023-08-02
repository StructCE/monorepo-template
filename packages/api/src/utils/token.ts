import { generateRandomString, isWithinExpiration } from "lucia/utils";

import { prisma } from "@struct/db";

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export const generateEmailVerificationToken = async (userId: string) => {
  const storedUserTokens = await prisma.emailVerificationToken.findMany({
    where: {
      user_id: userId,
    },
  });

  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await prisma.emailVerificationToken.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN,
      user_id: userId,
    },
  });

  return token;
};
