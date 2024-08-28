"use client";
import React, { useEffect, useState } from "react";
import IdentityCard from "@/components/ui/identitycard";
import RatingCard from "@/components/ui/ratingcard";
import { Avatar } from "@/components/ui/avatar";
import { MdEdit } from "react-icons/md";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";

const Page = () => {
  const session = useSession();
  const userId = session?.data?.user.id;
  const [userProfile, setUserProfile] = useState("");

  useEffect(() => {
    if (userId) {
      console.log(`profile id: ${userId}`);
      axios
        .get(`/api/profile?id=${userId}`, { method: "GET" })
        .then((response) => setUserProfile(JSON.stringify(response)));
    }
  }, [userId]);

  if (!userProfile) return <div>Loading...</div>;

  return (
    <div className="flex flex-row items-center justify-center bg-bgprofile w-full h-screen bg-cover">
      <div className="w-1/2 flex flex-col items-center">
        <Avatar />
        <IdentityCard id={userProfile} />
        <div className="flex flex-row p-2">
          <a
            href="#"
            className="bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center"
          >
            <FaInstagram />
          </a>
          <div className="EditButton bg-HMIF-600 m-2 w-10 h-10 rounded-sm flex items-center justify-center text-white text-4xl text-center">
            <Link href={`/editprofcard?id=${userId}`}>
              <MdEdit />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-[5px] bg-HMIF-500"></div>
      <div className="w-1/2 flex flex-col items-center">
        <RatingCard />
      </div>
    </div>
  );
};

export default Page;
