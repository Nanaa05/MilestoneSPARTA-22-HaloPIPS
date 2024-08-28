"use server";
import React from "react";
import { getFriendList } from "./friendlist";
import FriendList from "./friendReact";
import { MenuIcon } from "lucide-react";
import NavBar from "@/components/navbar/navBar";

const Chat = async () => {
  const friendList = await getFriendList();
  return (
    <>
      <NavBar></NavBar>
      <div className="flex h-screen bg-HMIF-600 text-HMIF-100">
        <div className="w-1/3 bg-HMIF-600 p-4 overflow-y-auto">
          <div>
            <FriendList friendList={friendList}></FriendList>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
