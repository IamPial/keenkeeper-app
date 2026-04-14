import React from "react";
import { MdNotificationsPaused } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFriends from "./../hooks/useFriends";
import FriendsOverviewCard from "./FriendsOverviewCard";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";

const DetailsCard = () => {
  const { friends } = useFriends();

  const days = friends.filter((item) => item.days_since_contact);
  console.log(days, "hd");

  return (
    <div className="py-20 container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Details Card Left Section Start */}
        <div className="col-span-full lg:col-span-1  rounded-lg">
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
        {/* Details Card Left Section End */}

        {/* Details Card Right Section Start */}
        <div className=" col-span-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FriendsOverviewCard value="62" text="Days Since Contact" />
              <FriendsOverviewCard text="Goal (Days)" value="30" />
              <FriendsOverviewCard text="Next Due" value="Feb 27, 2026" />
            </div>
            <div className="shadow-sm p-6 rounded-lg">
              <div className="flex justify-between mb-5">
                <h2 className="font-medium text-xl text-[#244D3F] ">
                  Relationship Goal
                </h2>
                <button className="btn font-medium text-sm">Edit</button>
              </div>
              <p className="text-lg text-slate-500">
                Connect Every{" "}
                <span className="font-bold text-lg text-slate-800">
                  30 Days
                </span>
              </p>
            </div>
            <div className="p-6 shadow-sm">
              <h2 className="font-medium text-[#244D3F] text-xl">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <div className=" rounded-lg text-center p-8 space-y-3 shadow-sm ">
                  <img src={callImg} alt="Call" className="mx-auto w-8" />
                  <h2 className="text-lg text-slate-500 ">Call</h2>
                </div>
                <div className=" rounded-lg text-center p-8 space-y-3 shadow-sm ">
                  <img src={textImg} alt="Call" className="mx-auto w-8" />
                  <h2 className="text-lg text-slate-500 ">Text</h2>
                </div>
                <div className=" rounded-lg text-center p-8 space-y-3 shadow-sm ">
                  <img src={videoImg} alt="Call" className="mx-auto w-8" />
                  <h2 className="text-lg text-slate-500 ">Video</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details Card Right Section End */}
      </div>
    </div>
  );
};

export default DetailsCard;
