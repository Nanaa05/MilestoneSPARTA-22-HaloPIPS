import React from "react";
import Card from "@/components/card";
import ButtonNav from "@/components/button";
import "./page.css";
const page = () => {
  return (
    <div className="Title">
      <div className="flex items-center justify-center min-h-screen">
          <div className="Login">
            <h1 className="font-bold center">Welcome</h1>
          </div>
          <div className="Button1">
            <ButtonNav link="/login-tpb" color="200">
              <h1 className="TPB">Login as Mahasiswa TPB</h1>
            </ButtonNav>
          </div>
          <div className="Button2">
            <ButtonNav link="/login-memberhmif" color="200">
              <h1 className="Jurusan">Login as Mahasiswa Jurusan</h1>
            </ButtonNav>
          </div>
          <div className="Button3">
            <ButtonNav link="/login-memberhmif" color="200">
              <h1 className="Alumni">Login as Alumni</h1>
            </ButtonNav>
          </div>
      </div>
    </div>
  );
};

export default page;
