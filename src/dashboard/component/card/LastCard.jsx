import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPlus } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <>
      <div
        className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700 w-full h-full  mr-4"
        style={{ height: "80%" }}
      >
        <div >
          <img
            src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/backgrounds/blog-bg.jpg"
            alt=""
            className="w-full h-56"
          />
        </div>
        <div className=" bg-white m-6">
          <p className=" text-gray-500 mb-4 ">22 March ,2024</p>
          <p className=" text-lg  ">
            Super awesome, Angular 12 <br /> is coming soon!
          </p>
          <div className="flex justify-between w-36 mb-4 mt-4 ">
            <button className=" bg-blue-900 text-white border rounded-md w-28 p-1 ">
              Medium
            </button>
            <button className=" bg-red-600 text-white border rounded-md w-20 p-1 ml-3">
              Low
            </button>
          </div>
          <hr />
          <div></div>
          <div className="flex  ml-4 mr-4 h-10  p-1 mb-2 w-full ">
           <div className="flex  justify-between">
           <div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
              <button className="border rounded-full h-10 w-10 mr-1">
                <img
                  src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/profile/user-5.jpg"
                  alt=""
                  className="rounded-full h-10 w-10 "
                />
              </button>
              <button className="border rounded-full h-10 w-10 mr-1">
                <img
                  src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/profile/user-3.jpg"
                  alt=""
                  className="rounded-full h-10 w-10"
                />
              </button>
              <button className="border rounded-full h-10 w-10  mr-1 mt-0">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
           </div>
            <div>
            <button className="border rounded-full h-10 w-10  mr-0 mt-0 ">
                <FontAwesomeIcon icon={faComment} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
