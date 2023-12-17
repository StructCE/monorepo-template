import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User, prisma } from "../../../../prisma/prisma";
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
          placeholder: `email@gmail.com`,
        },
        password: {
          label: `Password`,
          type: `password`,
          placeholder: `password`,
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        
        if (!user) return null;
        if (credentials.password !== user.password) return null;

        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
          image: user.image,
          isOwner: Boolean(user.isOwner),
        };
      },
    }),

    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log(`Session Callback`, { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          isOwner: token.isOwner,
        },
      };
    },

    jwt: ({ user, token }) => {
      // console.log(`JWT Callback`, { user, token });
      if (user) {
        const prismaUser = user as unknown as User;
        return {
          ...token,
          id: prismaUser.id,
          isOwner: prismaUser.isOwner,
        };
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
