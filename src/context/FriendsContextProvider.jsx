import React, { useState } from "react";
import { FriendsContext } from "./FriendsContext";

const FriendContextProvider = ({ children }) => {
  const [listItem, setListItem] = useState([]);
  const data = {
    listItem,
    setListItem,
  };
  return (
    <div>
      <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
    </div>
  );
};

export default FriendContextProvider;
