import React from "react";
import Card from "../../../ui/Card";

const FriendList = () => {
  return (
    <div className="container mx-auto pb-20 px-2">
      <div className="space-y-4">
        <h2 className="font-semibold text-2xl text-slate-800">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
