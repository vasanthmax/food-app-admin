import React from "react";
import { Grid, ShoppingCart } from "react-feather";
import { NavLink, useLocation } from "react-router-dom";
const SideBar = ({ open }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={`md:w-2/5 lg:w-1/5 md:flex flex-col align-middle h-screen md:top-0 md:sticky px-6 shadow-lg md:transform-none ${
        open
          ? "fixed left-0 top-0 transform translate-x-0 z-20 bg-white"
          : "relative transform -translate-x-full hidden"
      }`}
    >
      <h1 className="text-3xl text-purple-400 font-extrabold py-6 px-3 mb-8">
        Food App
      </h1>
      <div>
        <ul>
          <NavLink
            to="/dashboard"
            className={(navData) =>
              navData.isActive ? "text-purple-400" : "text-gray-400"
            }
          >
            <li className="py-3 px-3 text-xl flex align-middle items-center mb-2 relative">
              {location.pathname === "/dashboard" ? (
                <div className="bg-purple-400 h-8 w-8 rounded-full absolute left-0 transform -translate-x-12 "></div>
              ) : (
                ""
              )}
              <Grid className="mr-4" />
              Dashboard
            </li>
          </NavLink>
          <NavLink
            to="/products"
            className={(navData) =>
              navData.isActive ? "text-purple-400" : "text-gray-400"
            }
          >
            <li className="py-3 px-3 text-xl flex align-middle items-center mb-2 relative">
              {location.pathname === "/products" ? (
                <div className="bg-purple-400 h-8 w-8 rounded-full absolute left-0 transform -translate-x-12"></div>
              ) : (
                ""
              )}
              <ShoppingCart className="mr-4" />
              Products
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
