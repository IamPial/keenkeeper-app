import React from "react";

const FriendsOverviewCard = ({ value, text }) => {
  return (
    <div className=" rounded-lg text-center p-8 space-y-2 shadow-sm">
      <h2 className="font-semibold text-[#244D3F] text-[28px]">{value}</h2>
      <h2 className="text-lg text-slate-500 ">{text}</h2>
    </div>
  );
};

export default FriendsOverviewCard;
