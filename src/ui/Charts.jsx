import React, { useContext } from "react";

import { Pie, PieChart, Tooltip, Legend } from "recharts";
import { FriendsContext } from "../context/FriendsContext";

export default function Charts() {
  const { listItem } = useContext(FriendsContext);

  const call = listItem.filter((item) => item.text === "call");
  const text = listItem.filter((item) => item.text === "text");
  const video = listItem.filter((item) => item.text === "video");

  const data = [
    { name: "Call", value: call.length, fill: "#244D3F" },
    { name: "Text", value: text.length, fill: "#7F37F5" },
    { name: "Video", value: video.length, fill: "#37A163" },
  ];

  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "60vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip />
      <Legend wrapperStyle={{ paddingTop: "40px" }} />
    </PieChart>
  );
}
