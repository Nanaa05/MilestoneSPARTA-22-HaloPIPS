import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas";
import { getUserHMIFByUsername, getUserTpbByUsername } from "./data/user";
import bcrypt from "bcryptjs";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { username, password } = validatedFields.data;
          const userHMIF = await getUserHMIFByUsername(username);

          if (!userHMIF) {
            console.log("user HMIF not found", userHMIF);
            const userTPB = await getUserTpbByUsername(username);
            if (!userTPB || !userTPB.password) {
              console.log("user TPB not found", userHMIF);
              return null;
            }
            const passwordsMatch = await bcrypt.compare(
              password,
              userTPB.password
            );
            if (passwordsMatch) {
              console.log("Password match", userTPB);

              return userTPB;
            } else console.log("Password dont match", userTPB);
          }

          if (!userHMIF || !userHMIF.password) return null;
          const passwordsMatch = await bcrypt.compare(
            password,
            userHMIF.password
          );
          if (passwordsMatch) {
            console.log("Password match", userHMIF);
            return userHMIF;
          } else console.log("Password dont match", userHMIF);
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
