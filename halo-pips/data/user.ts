"use server";
import { db } from "@/lib/db";
export const getUserByUsername = async (
  username: string | null | undefined,
  role: string
) => {
  if (!username) return null;
  if (role === "TPB")
    try {
      const user = await db.userTPB.findUnique({ where: { username } });
      return user;
    } catch {
      return null;
    }
  else
    try {
      const user = await db.userHMIF.findUnique({ where: { username } });
      return user;
    } catch {
      return null;
    }
};

export const getUserByID = async (
  id: string | null | undefined,
  role: string
) => {
  if (!id) return null;
  if (role === "TPB")
    try {
      const user = await db.userTPB.findUnique({ where: { id } });
      return user;
    } catch {
      return null;
    }
  else
    try {
      const user = await db.userHMIF.findUnique({ where: { id } });
      return user;
    } catch {
      return null;
    }
};
