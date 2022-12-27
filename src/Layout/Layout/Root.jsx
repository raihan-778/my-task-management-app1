import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";
import Navbar from "../../components/shared/Navbar/Nav";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
