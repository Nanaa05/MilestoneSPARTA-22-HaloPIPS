import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// handle Get User Profile
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chatId");

  if (!chatId) {
    return NextResponse.json({ error: "Missing chatId" }, { status: 400 });
  }

  let chatRoom = await db.chatRoom.findUnique({
    where: {
      chatID: chatId,
    },
  });
  let messages = chatRoom?.messages;

  if (chatRoom) {
    return NextResponse.json(messages, { status: 200 });
  } else {
    return NextResponse.json({ error: "chatID not found" }, { status: 404 });
  }
}
