import React from "react";
import { MdNotificationsPaused } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFriends from "./../hooks/useFriends";
import FriendsOverviewCard from "./FriendsOverviewCard";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";
import { useParams } from "react-router";
import CardDetailsBtn from "../components/shared/CardDetailsBtn";

//  {
//     "id": 12,
//     "name": "Sophia Martinez",
//     "picture": "https://i.ibb.co.com/rGDn16G1/shopia.jpg",
//     "email": "sophia.martinez@example.com",
//     "days_since_contact": 1,
//     "status": "on-track",
//     "tags": ["hobby", "travel"],
//     "bio": "Met through a language exchange program. Planning future trips together.",
//     "goal": 30,
//     "next_due_date": "2026-05-13"
//   }

const DetailsCard = () => {
  const { friends } = useFriends();
  const { id } = useParams();

  const expectedDetails = friends.find((item) => item.id === parseInt(id));
  if (!expectedDetails) return null;
  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedDetails;

  //convert date into a date string with separator
  const date = new Date(next_due_date).toDateString().slice(4).split(" ");
  const strDate = date[0] + " " + date[1] + " , " + date[2];

  return (
    <div className="py-20 container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Details Card Left Section Start */}
        <div className="col-span-full lg:col-span-1  rounded-lg">
          <div className="text-center shadow-md rounded-lg p-6">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full mb-3 mx-auto"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">{name}</h2>
              <div className="flex flex-col justify-center items-center gap-3 mb-4">
                <span
                  className={`badge  capitalize py-4 text-white rounded-full font-medium ${status === "almost due" ? "badge bg-[#EFAD44]" : status === "on-track" ? "bg-[#244D3F]" : "bg-[#EF4444]"}`}
                >
                  {status}
                </span>

                <div className="flex  gap-2 justify-center items-center">
                  {tags.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="badge bg-[#CBFADB] text-[#244D3F] py-4 uppercase rounded-full font-medium "
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
              <p className="italic text-slate-500 font-medium">{bio}</p>
              <p className="text-slate-500 text-sm">{email}</p>
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
              <FriendsOverviewCard
                text="Days Since Contact"
                value={days_since_contact}
              />
              <FriendsOverviewCard text="Goal (Days)" value={goal} />
              <FriendsOverviewCard text="Next Due" value={strDate} />
            </div>
            <div className="shadow-sm p-6 rounded-lg">
              <div className="flex justify-between mb-5">
                <h2 className="font-medium text-xl text-[#244D3F] ">
                  Relationship Goal
                </h2>
                <button className="btn font-medium text-sm">Edit</button>
              </div>
              <p className="text-lg text-slate-500">
                Connect Every
                <span className="ml-1 font-bold text-lg text-slate-800">
                  {goal} Days
                </span>
              </p>
            </div>
            <div className="p-6 shadow-sm">
              <h2 className="font-medium text-[#244D3F] text-xl">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <CardDetailsBtn imgSrc={callImg} text={"Call"} />
                <CardDetailsBtn imgSrc={textImg} text={"Text"} />
                <CardDetailsBtn imgSrc={videoImg} text={"Video"} />
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
