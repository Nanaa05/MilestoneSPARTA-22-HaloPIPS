"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface Props {
  friendList: (string | never[])[] | undefined;
}

const FriendList = ({ friendList }: Props) => {
  const router = useRouter();
  return (
    <ul>
      {friendList &&
        friendList.map((x) => (
          <li key={`id${x}`} onClick={() => router.push(`/chat/${x}`)}>
            {x}
          </li>
        ))}
    </ul>
  );
};

export default FriendList;
