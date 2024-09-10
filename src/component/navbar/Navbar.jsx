import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 border shadow ">
        <div className=" flex flex-wrap justify-between m-4 ">
          <ul className="font-medium flex flex-col  mt-4 ml-2 md:flex-row md:space-x-8 text-black  justify-evenly">
            <li>
              <FontAwesomeIcon
                icon={faBars}
                className="mr-2 cursor-pointer"
                onClick={toggleSidebar}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSearch}
                className="mr-2 cursor-pointer"
              />
            </li>
            <li>
              <a href="#" className="ml-2 text-black">
                Apps
              </a>
            </li>

            <li>
              <a href="#" className="py-2 px-3 text-black">
                Chat
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 text-black">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 text-black">
                Email
              </a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse text-black justify-evenly mr-2">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 text-black">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">JPMe</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Pass isSidebarOpen and toggleSidebar to Sidebar */}
      {isSidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
};

export default Navbar;
