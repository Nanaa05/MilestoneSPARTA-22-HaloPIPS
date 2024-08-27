import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas";
import { getUserByUsername } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
        role: { label: "role" },
      },
      async authorize(credentials) {
        // const validatedFields = loginSchema.safeParse(credentials);
        const username = credentials.username;
        const password = credentials.password;
        const role = credentials.role;
        // const { username, password, role } = validatedFields.data;
        if (username || password) {
          if (role === "TPB") {
            const userTPB = await getUserTpbByUsername(username);

            if (!userTPB || !userTPB.password) {
              return null;
            }
            const passwordsMatch = await bcrypt.compare(
              password,
              userTPB.password
            );
            if (passwordsMatch) {
              return userTPB;
            }
          } else {
            const userHMIF = await getUserHMIFByUsername(username);
            if (!userHMIF || !userHMIF.password) return null;
            const passwordsMatch = await bcrypt.compare(
              password,
              userHMIF.password
            );
            if (passwordsMatch) {
              return userHMIF;
            }
          }
        }
        // if (validatedFields.success) {
        // }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
