"use client";

import { useSession, signOut } from "next-auth/react";
import NavBar from "@/components/navbar/navbar";

const DashBoardPage = () => {
  const session = useSession();
  const onClick = () => signOut();
  return (
    <div>
      <NavBar></NavBar>
      <h1>DASHBOARD TPB</h1>
      {JSON.stringify(session)}
      <div>
        <h5>Are you sure you want to sign out?</h5>
        <button onClick={onClick}>Sign out</button>
      </div>
    </div>
  );
};

export default DashBoardPage;
