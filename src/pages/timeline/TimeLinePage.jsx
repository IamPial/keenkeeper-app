import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FriendsContext } from "../../context/FriendsContext";
import { Link } from "react-router";

const TimeLinePage = () => {
  const { listItem } = useContext(FriendsContext);
  const [filter, setFilter] = useState(listItem);

  //convert date into a date string with separator
  const date = new Date().toDateString().slice(4).split(" ");
  const strDate = date[0] + " " + date[1] + " , " + date[2];

  const handleFilterBtn = (text) => {
    const filteringArray = listItem.filter((item) => item.text === text);
    setFilter(filteringArray);
  };

  return (
    <div className="py-20 container mx-auto px-2 md:px-0">
      <div className="space-y-6 mb-6">
        <h2 className="text-5xl font-bold text-slate-900">Timeline</h2>
        <select defaultValue="Medium" className="select select-sm md:select-md">
          <option disabled={true}>Filter timeline</option>
          <option onClick={() => handleFilterBtn("call")}>Call</option>
          <option onClick={() => handleFilterBtn("text")}>Text</option>
          <option onClick={() => handleFilterBtn("video")}>Video</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        {listItem.length === 0 ? (
          <div className="py-10 text-center">
            <h2 className="text-slate-600 font-extrabold text-3xl md:text-5xl">
              No history are available right now!
            </h2>
          </div>
        ) : (
          filter.map((list, index) => {
            return (
              <div
                key={index}
                className="flex gap-6 items-center border border-gray-200 rounded-lg p-4 "
              >
                <img src={list.icon} alt={list.text} />
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
