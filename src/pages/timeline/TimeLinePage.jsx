import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const TimeLinePage = () => {
  return (
    <div className="py-20 container mx-auto px-2 md:px-0">
      <div className="space-y-6 mb-6">
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

      <div className="grid grid-cols-1 gap-6 ">
        <div className="flex gap-6 items-center border border-gray-200 rounded-lg p-4 ">
          <img src={videoImg} alt="video" />
          <div>
            <h2 className="font-medium text-2xl text-[#244D3F]">
              Video{" "}
              <span className="text-lg text-gray-500 font-normal">
                with Tom Baker
              </span>
            </h2>
            <p className="font-medium text-gray-500">March 29, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;
