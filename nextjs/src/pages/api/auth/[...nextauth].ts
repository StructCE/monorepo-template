import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../prisma/prisma";
import { use } from "react";

export const authOptions: NextAuthOptions = {
  // Configure um ou mais provedores de autenticação
  session: {
    strategy: `jwt`,
  },

  providers: [
    CredentialsProvider({
      name: `FazGostoso`,
      credentials: {
        email: {
          label: `Email`,
          type: `email`,
          placeholder: `hello@example.com`,
        },
        password: {
          label: `Password`,
          type: `password`,
        },
      },
      async authorize(credentials) {
        // const user = { id: `2`, name: `Teste`, email: `teste@teste.com` };
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        const isPasswordValid = credentials.password === user.password;
        if (!isPasswordValid) return null;

        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
          isOwner: user.isOwner,
        };
      },
    }),

    // GoogleProvider({
    //   clientId: String(process.env.GOOGLE_ID),
    //   clientSecret: String(process.env.GOOGLE_SECRET),
    // }),
  ],
};

export default NextAuth(authOptions);
