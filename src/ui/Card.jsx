import React from "react";

const Card = ({ friend }) => {
  const { picture, name, days_since_contact, tags, status } = friend;

  return (
    <div className="text-center shadow-sm rounded-lg p-6 ">
      <img
        src={picture}
        alt="Fatima"
        className="w-20 h-20 rounded-full mb-3 mx-auto"
      />
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
        <p className="text-sm text-slate-400">{days_since_contact}d ago</p>
        <div className="flex  gap-2 justify-center items-center">
          {tags.map((item, index) => {
            return (
              <span
                key={index}
                className="badge bg-[#CBFADB] text-[#244D3F] py-4 uppercase rounded-full "
              >
                {item}
              </span>
            );
          })}
        </div>
        <span
          className={`badge  capitalize py-4 text-white rounded-full ${status === "almost due" ? "badge bg-[#EFAD44]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default Card;
