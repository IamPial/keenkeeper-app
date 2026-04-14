import React from "react";
import { MdNotificationsPaused } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const DetailsCard = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 border rounded-lg">
          <div className="text-center shadow-lg rounded-lg p-6">
            <img
              src="https://i.ibb.co.com/rGDn16G1/shopia.jpg"
              alt="Fatima"
              className="w-20 h-20 rounded-full mb-3 mx-auto"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Sophia Martinez
              </h2>
              <div className="flex flex-col justify-center items-center gap-2">
                <span className="badge  capitalize py-4 text-white rounded-full bg-[#EF4444]">
                  OverDue
                </span>
                <span className="badge bg-[#CBFADB] text-[#244D3F] py-4 uppercase rounded-full font-medium ">
                  Work
                </span>
              </div>
              <p className="italic text-slate-500 font-medium">
                Met through a language exchange program. Planning future trips
                together.
              </p>
              <p className="text-slate-500 text-sm">
                sophia.martinez@example.com
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <button className="btn">
              <MdNotificationsPaused className="text-slate-900" /> Snooze 2
              weeks
            </button>
            <button className="btn text-slate-900">
              <BsArchive />
              Archive
            </button>
            <button className="btn text-slate-900">
              <RiDeleteBin6Line className="text-[#EF4444]" />
              Delete
            </button>
          </div>
        </div>
        <div className="border col-span-2 rounded-lg">
          <h2>hll</h2>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
