import React from "react";
import useFriends from "../../../hooks/useFriends";

const FriendsOverview = () => {
  const { friends } = useFriends();
  console.log(friends, "friends");
  //for attention
  const almostDue = friends.filter((item) => item.status === "almost due");
  const overDue = friends.filter((item) => item.status === "overdue");
  const needAttention = almostDue.length + overDue.length;

  //for interaction
  const thisMonthInteraction = friends.filter(
    (item) => item.days_since_contact <= 30,
  );

  const track = friends.filter((item) => item.status === "on-track");
  console.log(track);

  return (
    <div>
      <div>
        <h2>{friends.length}</h2>
        <h2>total</h2>
      </div>
      <div>
        <h2>{track.length}</h2>
        <h2>on track</h2>
      </div>
      <div>
        <h2>{needAttention}</h2>
        <h2>attention</h2>
      </div>
      <div>
        <h2>{thisMonthInteraction.length}</h2>
        <h2>interaction</h2>
      </div>
    </div>
  );
};

export default FriendsOverview;
