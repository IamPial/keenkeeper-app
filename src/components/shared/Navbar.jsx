import React from "react";
import { Link, NavLink } from "react-router";
import navLogoImg from "../../assets/logo.png";
import { FaHome } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { LuChartSpline } from "react-icons/lu";
import MyNavLink from "../../ui/MyNavLink";

const Navbar = () => {
  const links = [
    {
      path: "/",
      text: "Home",
      icon: <FaHome />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <CiClock2 />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <LuChartSpline />,
    },
  ];

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown space-x-3 ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 bg-base-100 shadow space-y-1"
            >
              {links.map((item, index) => {
                return (
                  <MyNavLink key={index} to={item.path}>
                    {item.icon} {item.text}
                  </MyNavLink>
                );
              })}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={navLogoImg} alt="Keen Keeper" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3 px-1">
            {links.map((item, index) => {
              return (
                <MyNavLink key={index} to={item.path}>
                  {item.icon} {item.text}
                </MyNavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
