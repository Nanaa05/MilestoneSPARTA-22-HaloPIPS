import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByID } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      credentials: {
        id: { label: "id" },
        password: { label: "Password", type: "password" },
        role: { label: "role" },
      },
      async authorize(credentials) {
        const id = credentials.id;
        const password = credentials.password;
        const role = credentials.role;
        if (id || password) {
          if (role === "TPB") {
            const userTPB = await getUserByID(id, "TPB");

            if (!userTPB || !userTPB.password) {
              return null;
            }
            const passwordsMatch = bcrypt.compare(password, userTPB.password);
            if (passwordsMatch) {
              return userTPB;
            }
          } else {
            const userHMIF = await getUserByID(id, "HMIF");
            if (!userHMIF || !userHMIF.password) return null;
            const passwordsMatch = bcrypt.compare(password, userHMIF.password);
            if (passwordsMatch) {
              return userHMIF;
            }
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
