"use server";
import * as z from "zod";
import { chatSchema } from "@/schemas";
import { db } from "@/lib/db";

interface Props {
  chatID: string;
  userID: string;
}

export const send = async (
  values: z.infer<typeof chatSchema>,
  { chatID, userID }: Props
) => {
  const validatedFields = chatSchema.safeParse(values);
  if (!validatedFields.success) {
    return;
  }
  const { message } = validatedFields.data;
  if (!message) {
    return;
  }
  const currentTime = new Date();
  const updateChat = await db.chatRoom.update({
    where: {
      chatID: chatID,
    },
    data: {
      messages: [
        { content: message, time: currentTime, userID: userID, read: false },
      ],
    },
  });
};
