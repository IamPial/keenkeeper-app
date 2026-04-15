import React, { useContext } from "react";

import { MdNotificationsPaused } from "react-icons/md";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import useFriends from "../../hooks/useFriends";
import { Link, useParams } from "react-router";
import FriendsOverviewCard from "../../ui/FriendsOverviewCard";

import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { FriendsContext } from "../../context/FriendsContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends } = useFriends();
  const { listItem, setListItem } = useContext(FriendsContext);

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

  const handleClick = (text) => {
    if (text === "call") {
      const newObj = { ...expectedDetails, icon: callImg, text: "call" };
      setListItem([...listItem, newObj]);
      toast.success(` Calling ${newObj.name} `);
    }
    if (text === "text") {
      const newObj = { ...expectedDetails, icon: textImg, text: "text" };
      setListItem([...listItem, newObj]);
      toast.success(` Texting ${newObj.name} `);
    }
    if (text === "video") {
      const newObj = { ...expectedDetails, icon: videoImg, text: "video" };
      setListItem([...listItem, newObj]);
      toast.success(` Video Calling ${newObj.name} `);
    }
  };

  return (
    <div className="py-20 container mx-auto px-2 bg-base-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Details Card Left Section Start */}
        <div className="col-span-full lg:col-span-1  rounded-lg  p-4">
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
            <div className="p-6 shadow-sm rounded-lg">
              <h2 className="font-medium text-[#244D3F] text-xl">
                Quick Check-In
              </h2>
              <div className="grid grid-cols-3 gap-6">
                <button
                  onClick={() => handleClick("call")}
                  className="btn rounded-lg text-center p-15  mt-4 "
                >
                  <div className="space-y-3 ">
                    <img src={callImg} alt={"Call"} className="mx-auto w-8" />
                    <h2 className="text-lg text-slate-500 ">Call</h2>
                  </div>
                </button>

                <button
                  onClick={() => handleClick("text")}
                  className="btn rounded-lg text-center p-15  mt-4 "
                >
                  <div className="space-y-3  ">
                    <img src={textImg} alt={"Text"} className="mx-auto w-8" />
                    <h2 className="text-lg text-slate-500 ">Text</h2>
                  </div>
                </button>

                <button
                  onClick={() => handleClick("video")}
                  className="btn rounded-lg text-center p-15  mt-4 "
                >
                  <div className="space-y-3  ">
                    <img src={videoImg} alt={"Video"} className="mx-auto w-8" />
                    <h2 className="text-lg text-slate-500 ">Video</h2>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Card Right Section End */}
      </div>
      <div className="pt-10 text-center">
        <Link to="/" className="btn text-white bg-[#244D3F]">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default FriendDetails;
