import React from "react";

const CardDetailsBtn = ({ imgSrc, text }) => {
  return (
    <button className="btn rounded-lg text-center p-15  mt-4 ">
      <div className="space-y-3  ">
        <img src={imgSrc} alt={text} className="mx-auto w-8" />
        <h2 className="text-lg text-slate-500 ">{text}</h2>
      </div>
    </button>
  );
};

export default CardDetailsBtn;
