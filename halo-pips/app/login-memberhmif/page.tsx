import React from "react";
import Card from "@/components/card";
import { ProfileForm } from "@/components/auth/form-login";
import "./HMIFlogin.css";

const LoginHMIF = () => {
  return (
    <div className="Background">
      <div className="flex items-center justify-center min-h-screen">
          <div className="Dummy">
            <h1>.</h1>
          </div>
      <div className="Panel">
        <Card color="600">
          <div className="Text">
            <h1 className="font-bold mb-12">Login as HMIF</h1>
          </div>
          <ProfileForm role="HMIF"></ProfileForm>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default LoginHMIF;
