import React, { useState } from "react";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getFriendList } from "../friendlist";
import { auth } from "@/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChatForm } from "@/components/chat/form";

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
  console.log("message:", messageList);
  return (
    <div>
      <h1>Chatroom {friendUsername}</h1>
      <p>your chatid:{chatID}</p>
      <Card className="h-auto w-6/12 p-5">
        <h4 className="mb-4 text-sm font-medium leading-none">Simple Chat</h4>
        <ScrollArea className=" h-72 w-auto rounded-md border m-2">
          <div className="p-4 flex flex-col-reverse">
            {messageList?.map(
              (x) =>
                x && (
                  <div>
                    <Separator className="my-2" />
                    <div className="text-sm">{JSON.stringify(x)}</div>
                  </div>
                )
            )}
            {/* <Separator className="my-2" />
            <div className="text-sm">hello</div>
            <Separator className="my-2" />
            <div className="text-sm">Halo</div> */}
          </div>
        </ScrollArea>
        <ChatForm chatID={chatID} userID={username}></ChatForm>
      </Card>
    </div>
  );
};

export default Chatroom;
