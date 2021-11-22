import React, { useState } from "react";
import { SideBar, Header } from "../components";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex">
      <SideBar open={open} setOpen={setOpen} />
      <div className="w-full">
        <Header open={open} setOpen={setOpen} />
        <div className="px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
