import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../../components/Home/Home";
import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Nav";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
