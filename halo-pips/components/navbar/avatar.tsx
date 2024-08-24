import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { CgProfile } from "react-icons/cg";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import React from "react";

const Avatar1 = () => {
  const user = useCurrentUser();
  return (
    <Avatar className="w-7 h-7">
      <AvatarImage src={user?.image || ""} />
      <AvatarFallback className="bg-HMIF-100">
        <CgProfile className="h-full w-full text-HMIF-400"></CgProfile>
      </AvatarFallback>
    </Avatar>
  );
};

export default Avatar1;
