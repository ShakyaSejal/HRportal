import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ title, icon, bgColor,iconColor, txtColor ,down ,color}) => {
  return (
    <>
      <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700 w-full h-52 mt-6 mr-4"
       style={{ backgroundColor: bgColor, txtcolor: txtColor}}>
        <div className=" p-6 flex justify-between">
       <div className="flex-col">
       <p className=" font-semibold  justify-between mt-6 ml-4 text-xl" style={{  color:txtColor}}>{title}</p>
       <p className=" font-semibold  justify-between mt-6 ml-4 text-xl" style={{  color:color}}>{down}</p> 
       </div>

        <button className=" bg-blue-200 rounded-full h-10 w-10  mt-6 ml-4 text-xl " style={{ backgroundColor:iconColor }}>
        
          {icon && <FontAwesomeIcon icon={icon} className=" items-center w-5 h-5 " />}
        </button>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Card;
