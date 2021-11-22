import React, { useState } from "react";
import { Menu } from "react-feather";

const Header = ({ open, setOpen }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="h-20 px-6 shadow-lg w-full flex items-center justify-between top-0 sticky mb-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center justify-center">
        <label
          for="toggleB"
          className="flex items-center cursor-pointer lg:mr-0 mr-4"
        >
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              class="sr-only"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <div
              className={`block ${
                checked
                  ? "bg-purple-400 transition duration-100 ease-in"
                  : "bg-gray-400"
              } w-14 h-8 rounded-full`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                checked ? "transform translate-x-full" : ""
              }`}
            ></div>
          </div>
        </label>
        <Menu
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Header;
