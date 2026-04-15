import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { FriendsContext } from "../../context/FriendsContext";
import { Link } from "react-router";

const TimeLinePage = () => {
  const { listItem } = useContext(FriendsContext);

  //convert date into a date string with separator
  const date = new Date().toDateString().slice(4).split(" ");
  const strDate = date[0] + " " + date[1] + " , " + date[2];

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
        {listItem.length === 0 ? (
          <div className="py-10 text-center">
            <h2 className="text-slate-600 font-extrabold text-3xl md:text-5xl">
              No notification are available right now!
            </h2>
          </div>
        ) : (
          listItem.map((list, index) => {
            return (
              <div
                key={index}
                className="flex gap-6 items-center border border-gray-200 rounded-lg p-4 "
              >
                <img src={list.icon} alt="video" />
                <div>
                  <h2 className="font-medium text-2xl text-[#244D3F] capitalize">
                    {list.text}{" "}
                    <span className="text-lg text-gray-500 font-normal">
                      with {list.name}
                    </span>
                  </h2>
                  <p className="font-medium text-gray-500">{strDate}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link to="/" className="btn btn-lg bg-[#244D3F] text-white">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default TimeLinePage;
