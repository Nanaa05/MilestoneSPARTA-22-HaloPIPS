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

  let chatRoom = await db.chatRoom.findUnique({
    where: {
      chatID: chatID,
    },
  });
  let messages = chatRoom?.messages;

  const newMessages = {
    content: message,
    time: currentTime.toString(),
    userID: userID,
    read: false,
  };

  messages?.push(newMessages);
  if (messages !== null)
    await db.chatRoom.update({
      where: {
        chatID: chatID,
      },
      data: {
        messages: messages,
      },
    });
  else {
    await db.chatRoom.update({
      where: {
        chatID: chatID,
      },
      data: {
        messages: [],
      },
    });
  }
};
