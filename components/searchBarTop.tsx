"use client";
import { useState } from "react";

const SearchBarTop = () => {
  const [showSearchTop, setshowSearchTop] = useState(false);
  return (
    <>
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
    </>
  );
};

export default SearchBarTop;
