import React, { useEffect, useState } from "react";
import {
  MENU_LOGO,
  USER_LOGO,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

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
        <img className="h-12" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </div>

      {/* Center - Search Bar */}
      <div className="flex items-center justify-center space-x-2">
        <div className="relative">
          {/* Search Input */}
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onFocus={() => setIsDropdownVisible(true)} // Show dropdown on focus
            onBlur={() => setIsDropdownVisible(false)}
          />

          {/* Search Button */}
          <button className="absolute right-2 top-1 bottom-1 bg-gray-100 hover:bg-gray-300 rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.707 22.293l-6.422-6.421a9.5 9.5 0 10-1.414 1.414l6.421 6.422a1 1 0 001.415-1.415zM2 10.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
            </svg>
          </button>

          {/* Dropdown List */}
          {isDropdownVisible && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
              <ul className="divide-y divide-gray-200">
                {suggestion.map((s) => (
                  <li
                    key={s}
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <span className="flex items-center">
                      <span className="mr-2 text-gray-500">🕒</span> {s}
                    </span>
                    <button className="text-blue-500 hover:underline">
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Right - User Icon */}
      <div className="flex justify-end items-center space-x-4">
        <img className="h-8 cursor-pointer" alt="user" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
