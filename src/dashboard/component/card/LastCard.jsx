import React from "react";
const Card = () => {
  return (
    <>
      <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700 w-full h-full  mr-4"  style={{height:"79%"}}>
        <div>
          <img
            src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/backgrounds/blog-bg.jpg"
            alt=""
            className="w-full h-64"
          />
        </div>
        <div className=" bg-white m-6">
          <p className=" text-gray-500 mb-4 ">22 March ,2024</p>
          <p className=" text-lg  ">
            Super awesome, Angular 12 <br /> is coming soon!
          </p>
          <div className="flex justify-between w-36 mb-4 mt-4">
            <button> Medium</button>
            <button> Low</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Card;
