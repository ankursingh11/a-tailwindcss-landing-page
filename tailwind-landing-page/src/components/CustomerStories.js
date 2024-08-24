import React from "react";
import ClickUpStory from "./ClickUpStory";
import NativeApi from "./NativeApi";

const CustomerStories = () => {
  return (
    <div className="mt-[8rem] mx-[5rem]">
      <div className="text-5xl">
        <div>Customer Stories</div>
        <ClickUpStory />
        <div className="flex gap-4">
          <NativeApi />
          <NativeApi />
          <NativeApi />
        </div>
      </div>
    </div>
  );
};

export default CustomerStories;
