import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `btn  ${isActive ? "bg-[#244D3F] text-white" : ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
