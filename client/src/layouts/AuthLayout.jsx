import React from "react";
import { Outlet } from "react-router";
import MainLogo from "../components/shared/MainLogo";
import AuthNav from "../pages/auth/AuthNav/AuthNav";
// import authImg from "../assets/AuthImg.jpg";

const AuthLayout = () => {
  return (
    <div className="container mx-auto  ">
      {/* Logo */}
      <div>
         <AuthNav></AuthNav>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Outlet (form side) */}
        <div className=" ">
          <Outlet />
        </div>

        {/* Image side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* <img src={authImg} alt="Auth Visual" className="max-w-xs lg:max-w-md rounded-lg shadow-lg" /> */}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
