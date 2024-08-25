import React from "react";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { getFriendList } from "../friendlist";
import { auth } from "@/auth";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { ChatForm } from "@/components/chat/form";
import Messages from "./messages";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MenuIcon, UserIcon, XIcon, PaperclipIcon, SendIcon } from 'lucide-react'

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
<div className="flex h-screen bg-HMIF-600 text-HMIF-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-HMIF-600 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <MenuIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">10:55</span>
        </div>
        {/* User list */}
        {['Orang 1', 'Orang 2', 'Orang 3', 'Orang 4'].map((user, index) => (
          <div key={index} className="flex items-center mb-4 bg-HMIF-300 rounded-lg p-2">
            <div>
              <div className="font-semibold">{user}</div>
              <div className="text-xs text-yellow-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="bg-HMIF-500 flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-HMIF-600 p-4 flex justify-between items-center">
          <div>
            <div className="font-semibold">Orang 1</div>
            <div className="text-xs">Last seen: Today at 05:00</div>
          </div>
          <div className="flex items-center">
            <UserIcon className="w-6 h-6 mr-2" />
            <XIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4" style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=800')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }}>
          {/* Sample messages */}
          <Messages chatID={chatID}></Messages>
        </div>

        {/* Input area */}
        <div className="bg-HMIF-600 p-4">
          <ChatForm chatID={chatID} userID={username}></ChatForm>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;

//<div className="flex items-center justify-center min-h-screen bg-HMIF-600">
//  <h1>Chatroom {friendUsername}</h1>
//  <p>your chatid:{chatID}</p>
//  <Card className="h-auto w-9/12 p-5">
//    <h4 className="mb-4 text-sm font-medium leading-none">Simple Chat</h4>
//    <Messages chatID={chatID}></Messages>
//    <ChatForm chatID={chatID} userID={username}></ChatForm>
//  </Card>
//</div>
// flex-1 bg-green-700 border-none text-yellow-100 placeholder-yellow-200