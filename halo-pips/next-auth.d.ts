import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "TPB" | "HMIF";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
