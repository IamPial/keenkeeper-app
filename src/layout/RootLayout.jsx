import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h2>RootLayout</h2>
      <Outlet />
    </div>
  );
};

export default RootLayout;
