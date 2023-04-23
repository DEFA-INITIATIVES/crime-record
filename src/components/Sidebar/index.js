import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
// import Header from './Header';

function Sidebar() {
  return (
    <div className="md:block hidden">
      {/* <Header /> */}

      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block ">
            <RxSketchLogo size={20} />
          </div>
          <h3>Dasboard</h3>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <RxDashboard size={20} />
          </div>
          <h3>Evidence</h3>
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block">
            <RxPerson size={20} />
          </div>
          <h3>Crimes</h3>
          {/* <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div> */}
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <FiSettings size={20} />
          </div>
          <h3>Setting</h3>
        </div>
        <main className="ml-20 w-full"></main>
      </div>
    </div>
  );
}

export default Sidebar;
