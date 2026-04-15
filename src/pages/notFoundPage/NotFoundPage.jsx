import React from "react";
import { BiHome } from "react-icons/bi";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className=" py-40">
      <div className="flex  justify-center items-center flex-col gap-5">
        <h2 className="text-7xl font-extrabold text-[#244D3F]">404</h2>
        <p className="font-bold text-2xl">Page Not Found</p>
        <p className="text-gray-500 ">
          Looks like this friendship link is broken.The page <br /> you're
          looking for doesn't exist or has been moved
        </p>
        <div className="text-white">
          <Link to="/" className="btn bg-[#244D3F] text-white">
            <BiHome /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
