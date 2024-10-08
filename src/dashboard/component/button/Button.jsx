import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Button = ({ children,icon }) => {
  return (
    <>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  ml-9 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        {children}
        
      </button>
    </>
  );
};

export default Button;
