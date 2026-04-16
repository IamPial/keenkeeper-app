import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `btn shadow-none  ${isActive ? "bg-[#244D3F] text-white" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
