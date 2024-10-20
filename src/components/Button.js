import React from "react";

const Button = ({ name }) => {
  return (
    <div className="flex space-x-2">
      <button className="bg-gray-100 hover:bg-gray-200 text-black font-medium py-1 px-4 rounded-lg m-2">
        {name}
      </button>
    </div>
  );
};

export default Button;
