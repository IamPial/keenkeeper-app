import React from "react";

const CardDetailsBtn = ({ imgSrc, text }) => {
  return (
    <div className=" rounded-lg text-center p-8 space-y-3 shadow-sm ">
      <img src={imgSrc} alt={text} className="mx-auto w-8" />
      <h2 className="text-lg text-slate-500 ">{text}</h2>
    </div>
  );
};

export default CardDetailsBtn;
