"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface Props {
  children: React.ReactNode;
  link?: string;
  color: string;
}

const ButtonNav = ({ children, link = "", color }: Props) => {
  const router = useRouter();
  console.log("btn bg-HMIF-" + color);
  return (
    <button
      className={"btn border-hidden bg-HMIF-" + color}
      onClick={() => router.push(link)}
    >
      {children}
    </button>
  );
};

export default ButtonNav;
