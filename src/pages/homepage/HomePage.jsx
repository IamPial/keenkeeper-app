import React from "react";
import Banner from "../../components/pages/homepage/Banner";
import FriendsOverview from "./../../components/pages/homepage/FriendsOverview";
import FriendList from "../../components/pages/homepage/FriendList";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FriendsOverview />
      <FriendList></FriendList>
    </div>
  );
};

export default HomePage;
