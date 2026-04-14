import React from "react";

const Card = () => {
  return (
    <div className="text-center shadow-sm rounded-lg p-6 ">
      <img
        src="https://i.ibb.co.com/39SBxgXK/fatima.jpg"
        alt="Fatima"
        className="w-20 h-20 rounded-full mb-3 mx-auto"
      />
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">David Kim</h2>
        <p className="text-sm text-slate-400">62d ago</p>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="badge bg-[#CBFADB] text-[#244D3F] py-4 uppercase rounded-full ">
            work
          </span>
          <span className="badge bg-[#EFAD44] capitalize py-4 text-white rounded-full">
            Almost Due
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
