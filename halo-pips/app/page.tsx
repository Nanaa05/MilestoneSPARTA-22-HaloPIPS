import React from "react";
import Card from "@/components/card";
import ButtonNav from "@/components/button";
const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-HMIF-600">
      <Card color="400">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <ButtonNav link="/login-tpb" color="200">
          Login as TPB
        </ButtonNav>
        <ButtonNav link="/login-memberhmif" color="200">
          Login as HMIF Member
        </ButtonNav>
      </Card>
    </div>
  );
};

export default page;
