import React, { useContext } from "react";
import Charts from "../../ui/Charts";
import { FriendsContext } from "../../context/FriendsContext";
import { Link } from "react-router";

const StatsPage = () => {
  const { listItem } = useContext(FriendsContext);
  return (
    <div className="py-20 container mx-auto px-2 md:px-0 ">
      <h2 className="text-4xl md:text-5xl font-bold ">Friendship Analytics</h2>
      {listItem.length === 0 ? (
        <div className="py-30 text-center space-y-6">
          <h2 className="text-slate-600 font-extrabold text-3xl md:text-5xl">
            Dashboard status are empty right now!
          </h2>
        </div>
      ) : (
        <div className="shadow-sm rounded-lg mt-6 p-2 mb-10">
          <h2 className="font-medium text-xl text-[#244D3F]">
            By Interaction Type
          </h2>
          <div className="flex justify-center items-center">
            <Charts />
          </div>
        </div>
      )}
      <div className="text-center">
        <Link to="/" className=" btn bg-[#244D3F] text-white">
          Back
        </Link>
      </div>
    </div>
  );
};

export default StatsPage;
