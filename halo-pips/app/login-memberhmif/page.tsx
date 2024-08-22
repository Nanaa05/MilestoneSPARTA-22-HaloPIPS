import React from "react";
import Card from "@/components/card";
import ButtonNav from "@/components/button";
const LoginMember = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-HMIF-600">
      <Card color="400">
        <h1 className="text-3xl font-bold mb-8">Login as HMIF Member</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <div className="label">
            <span className="label-text">Password:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </label>
        <ButtonNav color="200">Log in</ButtonNav>
      </Card>
    </div>
  );
};

export default LoginMember;
