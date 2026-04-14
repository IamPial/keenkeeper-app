import React from "react";
import useFriends from "../../../hooks/useFriends";
import FriendsOverviewCard from "../../../ui/FriendsOverviewCard";

const FriendsOverview = () => {
  const { friends } = useFriends();

  //for attention status
  const needAttention = friends.filter(
    (item) => (item.status === "almost due") + (item.status === "overdue"),
  );

  //for interaction status
  const thisMonthInteraction = friends.filter(
    (item) => item.days_since_contact <= 30,
  );

  //for on-track status
  const onTrack = friends.filter((item) => item.status === "on-track");

  const tracking = [
    {
      text: "Total Friends",
      value: friends.length,
    },
    {
      text: "On Track",
      value: onTrack.length,
    },
    {
      text: "Need Attention",
      value: needAttention.length,
    },
    {
      text: "Interactions This Month",
      value: thisMonthInteraction.length,
    },
  ];

  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {tracking.map((trackingItem, index) => (
          <FriendsOverviewCard
            key={index}
            text={trackingItem.text}
            value={trackingItem.value}
          />
        ))}
      </div>
      <div className="divider h-0.5 bg-gray-100 my-20"></div>
    </div>
  );
};

export default FriendsOverview;
