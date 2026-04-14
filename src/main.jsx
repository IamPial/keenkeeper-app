import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/Routes";
import { RouterProvider } from "react-router";
import FriendContextProvider from "./context/FriendsContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </FriendContextProvider>
  </StrictMode>,
);
