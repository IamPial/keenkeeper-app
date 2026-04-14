import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TimeLinePage = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="space-y-6">
        <h2 className="text-5xl font-bold text-slate-900">Timeline</h2>
        <div className="dropdown dropdown-center  ">
          <div
            tabIndex={0}
            role="button"
            className="w-52 text-left font-normal btn m-1"
          >
            Filter Timeline <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 text-center p-2 shadow-sm"
          >
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;
