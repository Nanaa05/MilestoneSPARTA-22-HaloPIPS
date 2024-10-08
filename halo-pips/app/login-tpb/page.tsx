import React from "react";
import Card from "@/components/card";
import { ProfileForm } from "@/components/auth/form-login";
import ButtonNav from "@/components/button";
import "./TPBlogin.css";

const LoginTPB = () => {
  return (
    <div className="Background">
      <div className="flex items-center justify-center min-h-screen">
          <div className="Dummy">
            <h1>.</h1>
          </div>
      <div className="Panel">
        <Card color="600">
          <div className="Text">
            <h1 className="font-bold mb-12">Login as TPB</h1>
          </div>
          <ProfileForm role="TPB"></ProfileForm>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default LoginTPB;
