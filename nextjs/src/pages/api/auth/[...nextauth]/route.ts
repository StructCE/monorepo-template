import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure um ou mais provedores de autenticação
  session: {
    strategy: `jwt`,
  },

  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
    }),

    CredentialsProvider({
      name: `Sign in`,
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
        const user = { id: `1`, name: `Willyan`, email: `teste@test.com` };
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
