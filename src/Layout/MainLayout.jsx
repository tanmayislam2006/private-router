import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div className="h-min-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
