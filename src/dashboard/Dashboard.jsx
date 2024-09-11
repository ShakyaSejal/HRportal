import React from "react";
import Button from "./component/button/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Bar from "./component/graph/Bar";
import Card from "./component/card/Card";
import DonutChart from "./component/graph/DonutChart";
import Performance from "./component/graph/Performance";
import Line from "./component/graph/Line";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Stats from "./component/stats/Stats";
import Daily from "./component/daily/Daily";
import Navbar from "../component/navbar/Navbar";
import LastCard from "./component/card/lastCard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* mainpagefull */}
      <div className=" bg-gray-100  ">
        <div className=" mr-8 ml-8 ">
          {/* mathi top ko 2 ta wala */}
          <div className="flex justify-between items-stretch ml-8 mr-8 h-full ">
            <div className="flex-1 ">
              <p className="text-gray-400 text-xl mt-6 mr-6">
                Welcome Johnathan
              </p>
              <p className="text-2xl">Ecommerce Dashboard</p>
            </div>
            <div className="flex items-center space-x-4  mr-8">
              <p className="text-gray-600 ">Date Dropdown</p>
              <Button icon={faPlus}>Read More</Button>
            </div>
          </div>
          {/* mathi ko wala sakko */}
          {/* 2nd part */}
          <div className="flex m-8 space-x-4">
            <div className="flex-col w-1/2 space-y-4">
              <div className="relative bg-indigo-400 h-48 rounded-lg overflow-hidden ">
                <img
                  src="https://bootstrapdemos.wrappixel.com/flexy/dist/assets/images/backgrounds/welcome-bg.png"
                  alt="Earnings background"
                  className="absolute inset-0 h-full w-full object-cover "
                />
                <div className="  h-full flex flex-col  bg-white bg-opacity-50 p-4 ">
                  <p className="ml-4 text-lg ">
                    Hey John, <br /> Download the latest report
                  </p>
                  <div className=" w-32 mt-6 ml-4">
                    <Button>Download</Button>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 ">
                <Card
                  className="flex-1"
                  title="Earnings"
                  down="$93,438.78"
                  color="white"
                  icon={faDollarSign}
                  bgColor="#4169E1"
                  txtColor="white"
                  iconColor="#87CEEB"
                />
                <Card
                  className="flex-1"
                  title="Monthly Sales"
                  down="3246"
                  txtColor="gray"
                  color="black"
                  icon={faDollarSign}
                  iconColor="yellow"
                />
              </div>
            </div>
            <div className="flex-1  bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700">
              <Bar />
            </div>
          </div>

          <div className=" flex gap-10 mt-10 ml-8 mr-8">
            <DonutChart />
            <Performance />
          </div>

          <section className="flex space-x-3 ml-8 mr-8 " >
            <div className=" mt-10 flex-1 flex mb-4 " style={{width:"300", height:"10"} }>
              <LastCard />
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 white:border-gray-700 mt-10 flex flex-col mb-4" style={{height:"77%"}}>
              <div className="flex justify-between ml-4 p-2">
                <div>
                  <h1> Weekly Stats</h1>
                  <h3> Average sales</h3>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
             <div >
             <div className=" m-0">
                <div >
                  <Stats
                    title={"Top Sales"}
                    name={"Johnathan Doe"}
                    icon={faCartShopping}
                    per={"+68% "}
                  />
                </div>
                <div className="m-1">
                  <Stats
                    title={"Best Seller"}
                    name={"MaterialPro Admin"}
                    icon={faCartShopping}
                    per={"+68% "}
                  />
                </div>
                <div>
                  <Stats
                    title={"Most Commented"}
                    name={"Ample Admin"}
                    icon={faCartShopping}
                    per={"+68% "}
                  />
                </div>
              </div>
             </div>

              <div className="">
                <Line />
              </div>
            </div>

            <div className="mt-10 flex-1 flex mb-4 ">
              <Daily className=" flex" />
            </div>
          </section>
        </div>
      </div>
      <footer class="bg-white text-center py-4">
        <p class="text-gray-500">2024© All Rights Reserved by Wrappixel</p>
      </footer>
    </>
  );
};

export default Dashboard;
