import React from "react";
import { MENU_LOGO, USER_LOGO, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col items-center p-2 bg-white shadow-md">
      {/* Left - Menu and Logo */}
      <div className="flex items-center space-x-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={MENU_LOGO}
        />
        <img
          className="h-12
          "
          alt="youtube-logo"
          src={YOUTUBE_LOGO}
        />
      </div>

      {/* Center - Search Bar */}
      <div className="flex items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full px-4 py-1 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.707 22.293l-6.422-6.421a9.5 9.5 0 10-1.414 1.414l6.421 6.422a1 1 0 001.415-1.415zM2 10.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
          </svg>
        </button>
      </div>

      {/* Right - User Icon */}
      <div className="flex justify-end items-center space-x-4">
        <img className="h-8 cursor-pointer" alt="user" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
