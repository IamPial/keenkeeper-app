import React from "react";
import { FiPlus } from "react-icons/fi";
import FriendsOverview from "./FriendsOverview";

const Banner = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-2">
        <div className="space-y-4 text-center pb-10">
          <h2 className="font-bold text-5xl text-slate-900">
            Friends to keep close in your life
          </h2>
          <p className="text-gray-500">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <div className="mt-8">
            <button className="btn bg-[#244D3F] text-white shadow-none">
              <FiPlus /> Add a Friend
            </button>
          </div>
        </div>

        <FriendsOverview></FriendsOverview>
      </div>
    </div>
  );
};

export default Banner;
