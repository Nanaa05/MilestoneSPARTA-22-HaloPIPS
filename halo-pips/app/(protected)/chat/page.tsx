"use server";
import React from "react";
import { getFriendList } from "./friendlist";
import FriendList from "./friendReact";
import { redirect } from "next/navigation";

const Chat = async () => {
  const friendList = await getFriendList();
  return (
    <div className="h-screen">
      <h1>chatlist</h1>
      <FriendList friendList={friendList}></FriendList>
    </div>
  );
};

export default Chat;
