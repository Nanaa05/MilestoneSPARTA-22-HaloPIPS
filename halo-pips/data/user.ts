"use server";
import { db } from "@/lib/db";

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

export const getUserByIDFriend = async (id: string | null | undefined) => {
  if (!id) return null;
  try {
    const userFriendId = await db.friend.findUnique({ where: { id } });
    return userFriendId;
  } catch {
    return null;
  }
};
