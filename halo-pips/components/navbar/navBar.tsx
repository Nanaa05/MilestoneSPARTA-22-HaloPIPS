"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ChatBubbleIcon, DashboardIcon, ExitIcon } from "@radix-ui/react-icons";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

import Avatar1 from "./avatar";
const NavBar = () => {
  const user = useCurrentUser();
  const role = user?.role;
  const router = useRouter();
  const [showMenu, setShowMenu] = useState("-translate-x-full");
  return (
    <div className="navbar bg-HMIF-600">
      <div className="flex-none">
        <button
          onClick={() => {
            console.log("clicked");
            setShowMenu("");
          }}
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-10 w-10 stroke-current text-HMIF-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={
          "transition-all p-2 block h-screen fixed w-64 bg-HMIF-600 left-0 top-1/2 -translate-y-1/2 shadow-xl " +
          showMenu
        }
      >
        <button
          onClick={() => setShowMenu("-translate-x-full")}
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-10 w-10 stroke-current text-HMIF-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => router.push("/profile/me")}
          className="m-1 content btn relative w-full btn-ghost text-HMIF-200"
        >
          <Avatar1></Avatar1>
          Profile
        </button>
        <button
          onClick={() => {
            if (role === "TPB") {
              router.push("/dashboard-tpb");
            } else {
              router.push("/dashboard-hmif");
            }
          }}
          className="m-1 content btn relative w-full btn-ghost text-HMIF-200"
        >
          <DashboardIcon></DashboardIcon>
          Dashboard
        </button>
        <button
          onClick={() => router.push("/chat")}
          className="m-1 btn relative w-full btn-ghost text-HMIF-200"
        >
          <ChatBubbleIcon></ChatBubbleIcon>
          Chat
        </button>
        <button
          onClick={() => signOut()}
          className="m-1 btn relative w-full btn-ghost text-HMIF-200"
        >
          <ExitIcon></ExitIcon>
          Logout
        </button>
        <br></br>
      </div>
    </div>
  );
};

export default NavBar;
