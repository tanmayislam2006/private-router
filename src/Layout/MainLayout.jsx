import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ToastContainer/>
      <Navbar />
      <div className="h-min-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
