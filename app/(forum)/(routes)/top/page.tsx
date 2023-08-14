"use client";

import CardTop from "@/components/cardTop";
import dummyLatests from "@/components/dummy-data/dummyLatest";
import Link from "next/link";
import { useState } from "react";

const Top = () => {
  const [showSearchTop, setshowSearchTop] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        <div
          className="flex gap-2 cursor-pointer hover:bg-white w-[32%] text-xl"
          onClick={() => setshowSearchTop(!showSearchTop)}
        >
          <span className="text-white">Year</span>
          <span className="text-[#4c4c5a]">AUG 14, 2022 - AUG 14, 2023</span>
          {showSearchTop ? (
            <span className="text-white">^</span>
          ) : (
            <span className="text-white">V</span>
          )}
        </div>
        <div
          className={`flex flex-col gap-4 absolute bg-[#313146] border border-white p-2 top-52 shadow-xl ${
            showSearchTop ? "block" : "hidden"
          }`}
        >
          <div className="flex hover:bg-white cursor-pointer text-xl">
            All Item
          </div>
          <div className="flex hover:bg-white cursor-pointer text-xl gap-2">
            <span className="text-white">Year</span>
            <span className="text-[#4c4c5a]">AUG 14, 2022 - AUG 14, 2023</span>
          </div>
          <div className="flex hover:bg-white cursor-pointer text-xl gap-2">
            <span className="text-white">Quarter</span>
            <span className="text-[#4c4c5a]">MAY 14- AUG 14</span>
          </div>
          <div className="flex hover:bg-white cursor-pointer text-xl gap-2">
            <span className="text-white">Month</span>
            <span className="text-[#4c4c5a]">JUL 14 - AUG 14</span>
          </div>
          <div className="flex hover:bg-white cursor-pointer text-xl gap-2">
            <span className="text-white">Week</span>
            <span className="text-[#4c4c5a]">AUG 8 - AUG 14</span>
          </div>
          <div className="flex hover:bg-white cursor-pointer text-xl gap-2">
            <span className="text-white">Today</span>
            <span className="text-[#4c4c5a]">AUGUST 14TH</span>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          <div className="flex flex-col mb-20 w-full">
            <div className="flex justify-between py-4 w-full px-4">
              <p className="w-full">Topic</p>
              <div className="flex w-1/4">
                <p className="w-full">Replies</p>
                <p className="w-full">Views</p>
                <p className="w-full">Activity</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyLatests.map((dummyLatest, index) => (
                <CardTop
                  key={index}
                  title={dummyLatest.title}
                  tag={dummyLatest.tag}
                  images={dummyLatest.images}
                  replies={dummyLatest.replies}
                  views={dummyLatest.views}
                  activity={dummyLatest.activity}
                />
              ))}
            </div>
            <div className="border-b-2 border-b-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
