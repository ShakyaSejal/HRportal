import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faMoon,
  faBell,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 border shadow ">
        <div className=" flex justify-between m-1 ">
          <ul className="font-medium flex flex-col  p-4 md:p-0 mt-5 ml-2 md:flex-row md:space-x-8 text-black  justify-evenly">
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

          <div className="flex flex-col md:flex-row   text-black  ">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row  text-black ">
              <li className=" mr-3">
                <button className="  rounded-full  w-10 h-10  hover:border border-transparent ">
                  <FontAwesomeIcon
                    icon={faMoon}
                    className="mr-2 cursor-pointer ml-2"
                  />
                </button>
              </li>
              <li className=" mr-3">
                <button className=" rounded-full w-10 h-10  hover:border-blue-200 border-transparent">
                  <img
                    src=" https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/svgs/icon-flag-en.svg"
                    alt=""
                    className=" border rounded-full  ml-1.5 w-6 h-6"
                  />
                </button>
              </li>
              <li className=" mr-3">
                <button className="  rounded-full w-10 h-10   hover:border border-transparent">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="mr-2 cursor-pointer ml-2"
                  />
                </button>
              </li>
              <li className=" mr-3">
                <button className="  rounded-full w-10 h-10 hover:border border-transparent  ">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="mr-2 cursor-pointer ml-2"
                  />
                </button>
              </li>
              <li className=" mr-3">
                <button className="  rounded-full w-10 h-10 hover:border border-transparent">
                  <img
                    src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/profile/user-1.jpg"
                    alt=""
                    className=" border rounded-full w-10 h-10  "
                  />
                </button>
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
