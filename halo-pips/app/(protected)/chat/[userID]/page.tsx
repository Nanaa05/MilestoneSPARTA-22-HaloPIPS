import React from "react";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getFriendList } from "../friendlist";
import { auth } from "@/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { ChatForm } from "@/components/chat/form";
import Messages from "./messages";

const Chatroom = async ({ params }: { params: { userID: string } }) => {
  let validation = false;
  const friendList = await getFriendList();
  if (friendList) {
    if (friendList.includes(params.userID)) {
      validation = true;
    }
  }
  if (!validation) {
    redirect("/chat");
  }
  // Chat ID Logic
  const session = await auth();
  const friendUsername = params.userID;
  const username = session?.user.name;
  if (!username) return;
  let sortList = [friendUsername, username];
  function sortThings(
    a: string | null | undefined,
    b: string | null | undefined
  ) {
    if (!a || !b) return 0;
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a > b ? -1 : b > a ? 1 : 0;
  }
  sortList = sortList.sort(sortThings).reverse();
  const chatID = sortList[0] + sortList[1];

  // GET messages from db
  const chatroom = await db.chatRoom.findUnique({
    where: {
      chatID: chatID,
    },
  });
  const messageList = chatroom?.messages;

  return (
    <div>
      <h1>Chatroom {friendUsername}</h1>
      <p>your chatid:{chatID}</p>
      <Card className="h-auto w-9/12 p-5">
        <h4 className="mb-4 text-sm font-medium leading-none">Simple Chat</h4>
        <Messages chatID={chatID}></Messages>
        <ChatForm chatID={chatID} userID={username}></ChatForm>
      </Card>
    </div>
  );
};

export default Chatroom;
