"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface Props {
  friendList: (string | never[])[] | undefined;
}

const FriendList = ({ friendList }: Props) => {
  const router = useRouter();
  return (
    <div>
      {friendList &&
        friendList.map((x) => (
          <div
            className="flex items-center mb-4 bg-HMIF-300 rounded-lg p-2"
            key={`id${x}`}
            onClick={() => router.push(`/chat/${x}`)}
          >
            <div className="font-semibold">{x}</div>
            <div className="text-xs text-yellow-200"></div>
          </div>
        ))}
    </div>
  );
};

export default FriendList;
