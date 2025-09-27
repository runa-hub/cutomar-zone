import React from "react";
// import vector1 from "./assets/vector1.png";

const Nav = ({ resolved, selectTickets }) => {
  return (
    <div className=" border-b  border-gray-100 w-11/12 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5">
        <div className="">
          <h1 className=" text-xl sm:text-2xl font-bold">CS — Ticket System</h1>
        </div>
        <div className="">
          <ol className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-5">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changing</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
            <button className="btn bg-[#422AD5] text-white rounded-lg px-4 py-2 mt-2 sm:mt-0">
              + New Ticket
            </button>
          </ol>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-5">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg text-white text-center h-56 sm:h-[250px] w-full sm:w-1/2 flex flex-col items-center justify-center">
          <h1>In-Progresing</h1>
          <p className="text-5xl">{selectTickets.length}</p>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg text-white text-center h-56 sm:h-[250px] w-full sm:w-1/2 flex flex-col items-center justify-center">
          <h1>Resolve</h1>
          <p className="text-5xl">{resolved.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
