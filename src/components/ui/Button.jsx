import React from "react";

const Button = ({ children }) => {
  return (
    <button className="cursor-pointer py-1.5 px-5 text-black dark:text-white border border-customNeutral-200 dark:border-customNeutral-700 rounded-full hover:bg-customRed-700 hover:text-white dark:hover:bg-customRed-700 dark:hover:text-white transition-colors duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default Button;
