import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import the close icon

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 transition-transform transform translate-x-0"
      >
        <div className="relative h-full px-3 py-4 overflow-y-auto">
          {/* Close button inside the sidebar */}
          <button
            type="button"
            className="absolute top-2 right-2 p-2 text-gray-500 rounded-lg hover:bg-gray-100"
            onClick={toggleSidebar}
          >
              <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="space-y-2 font-medium mt-8">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <span className="flex-1 ms-3">Sign Up</span>
              </a>
            </li>
          </ul>
          <div className="p-4 mt-6 rounded-lg bg-blue-50">
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded">
                Beta
              </span>
            </div>
            <p className="text-sm text-blue-800">
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              className="text-sm text-blue-800 underline hover:text-blue-900"
              href="#"
            >
              Turn new navigation off
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
