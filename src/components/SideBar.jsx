import React from "react";
import { Grid, ShoppingCart } from "react-feather";

const SideBar = ({ open }) => {
  return (
    <div
      className={`md:w-2/5 lg:w-1/5 md:flex flex-col align-middle h-screen md:top-0 md:sticky px-6 shadow-lg md:transform-none ${
        open
          ? "absolute left-0 top-0 transform translate-x-0 z-20 bg-white"
          : "relative transform -translate-x-full hidden"
      }`}
    >
      <h1 className="text-3xl text-purple-400 font-extrabold py-6 px-3 mb-8">
        Food App
      </h1>
      <div>
        <ul>
          <li className="py-3 px-3 text-xl text-purple-400 flex align-middle items-center mb-2 relative">
            <div className="bg-purple-400 h-8 w-8 rounded-full absolute left-0 transform -translate-x-12"></div>
            <Grid className="mr-4" />
            Dashboard
          </li>
          <li className="py-3 px-3 text-xl text-gray-400 flex align-middle items-center mb-2">
            <ShoppingCart className="mr-4" />
            Products
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
