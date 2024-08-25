import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserHMIFByID, getUserTpbByID } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "TPB" | "HMIF";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUserHMIF = await getUserHMIFByID(token.sub);

      if (!existingUserHMIF) {
        const existingUserTPB = await getUserTpbByID(token.sub);
        if (!existingUserTPB) {
          return token;
        }
        token.role = "TPB";
        return token;
      }
      token.role = "HMIF";
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
