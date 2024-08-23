import React from "react";
import Card from "@/components/card";
import { ProfileForm } from "@/components/auth/form-login";

const LoginHMIF = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-HMIF-600">
      <Card color="400">
        <h1 className="text-3xl font-bold mb-8">Login as HMIF Member</h1>
        <ProfileForm role="HMIF"></ProfileForm>
      </Card>
    </div>
  );
};

export default LoginHMIF;
