import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10 inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Today 23 March
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1 bg-gray-500   rounded-lg border-gray-700">
            <button
              onClick={() => handleOptionClick('Option 1')}
              className="block px-4 py-2  text-white hover:bg-blue-400 rounded-lg w-full"
            >
             Today 24 March
            </button>
            <button
              onClick={() => handleOptionClick('Option 2')}
              className="block px-4 py-2  text-white hover:bg-blue-400 rounded-lg w-full"
            >
             Today 25 March
            </button>
            <button
              onClick={() => handleOptionClick('Option 3')}
              className="block px-4 py-2 text-white hover:bg-blue-400 rounded-lg w-full"
            >
             Today 26 March 
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
