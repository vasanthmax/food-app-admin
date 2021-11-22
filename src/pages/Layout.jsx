import React, { useState } from "react";
import { SideBar, Header } from "../components";

const Layout = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex">
      <SideBar open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
    </div>
  );
};

export default Layout;
