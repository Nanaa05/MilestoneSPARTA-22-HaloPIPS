"use server";
import React from "react";
import { getFriendList } from "./friendlist";
import FriendList from "./friendReact";
import { MenuIcon } from "lucide-react";

const Chat = async () => {
  const friendList = await getFriendList();
  return (
    <div className="flex h-screen bg-HMIF-600 text-HMIF-100">
      <div className="w-1/3 bg-HMIF-600 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <MenuIcon className="w-6 h-6" />
        </div>
        <div>
          <FriendList friendList={friendList}></FriendList>
        </div>
      </div>
    </div>
  );
};

export default Chat;
