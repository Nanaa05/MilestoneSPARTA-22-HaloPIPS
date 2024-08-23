"use server";
import { db } from "@/lib/db";
export const getUserHMIFByUsername = async (username: string) => {
  try {
    const user = await db.userHMIF.findUnique({ where: { username } });
    return user;
  } catch {
    return null;
  }
};

export const getUserHMIFByID = async (id: string) => {
  try {
    const user = await db.userHMIF.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const getUserTpbByUsername = async (username: string) => {
  try {
    const user = await db.userTPB.findUnique({ where: { username } });
    return user;
  } catch {
    return null;
  }
};

export const getUserTpbByID = async (id: string) => {
  try {
    const user = await db.userTPB.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
