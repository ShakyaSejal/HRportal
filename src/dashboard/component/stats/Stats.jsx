import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stats = ({ title, name, per, icon }) => {
  return (
    <>
      <div className=" items-center justify-between  ">
        <div className="flex space-x-4 items-center ">
        <div>
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className=" p-2 h-10 w-10 rounded-3xl bg-yellow-200 "
            />
          )}
        </div>
        <div className="flex justify-between"><div className=" mr-0">
          <h1 className=" text-black font-semibold">{title} </h1>
          <h1 className=" text-gray-400 font-thin">{name}</h1>
        </div>
        </div>
        <div>
          <button className=" bg-gray-300 rounded-lg p-1 w-20 text-gray-400 ml-16">
            {per}
          </button>
        </div></div>
        
      </div>
    </>
  );
};

export default Stats;
