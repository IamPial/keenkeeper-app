import React from "react";
import Card from "../../../ui/Card";
import useFriends from "./../../../hooks/useFriends";
import { BounceLoader } from "react-spinners";

const FriendList = () => {
  const { friends, loading } = useFriends();

  return (
    <div className="container mx-auto pb-20 px-2">
      <div className="space-y-4">
        <h2 className="font-semibold text-2xl text-slate-800">Your Friends</h2>

        {loading ? (
          <div className="py-30 flex justify-center items-center">
            <BounceLoader color="#244D3F" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {friends.map((friend, index) => {
              return <Card key={index} friend={friend}></Card>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendList;
