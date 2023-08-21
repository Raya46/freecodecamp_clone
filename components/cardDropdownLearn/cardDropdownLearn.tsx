"use client";

import { useState } from "react";

const CardDropdownLearn = ({
  title,
  desc1,
  desc2,
  lengthCourse,
}: {
  title: string;
  desc1: string;
  desc2: string;
  lengthCourse: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded((prevState) => !prevState);
    console.log(expanded);
  };
  return (
    <>
      <div
        className="flex justify-between w-full bg-[#0A0A23] p-7 cursor-pointer hover:bg-[#2A2A40]"
        onClick={handleCardClick}
      >
        <div className="flex gap-2">
          <input type="radio" className="read-only:bg-black" />
          <p className="text-xl">{title}</p>
        </div>
        {expanded ? <p>^</p> : <p>v</p>}
      </div>
      <div
        className={`${
          expanded ? "flex" : "hidden"
        } flex-col gap-6 w-full bg-[#0A0A23] p-6`}
      >
        <div className="flex text-xl">{desc1}</div>
        <div className="flex text-xl">{desc2}</div>
        <button className="border-white border-4 bg-[#3B3B4F] text-white p-2 w-1/5 hover:bg-white hover:text-[#3B3B4F]">
          Start Project
        </button>
        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {Array.from({ length: lengthCourse }, (_, index) => (
            <div
              key={index}
              className="w-14 h-14 flex items-center justify-center border-dashed border border-gray-600 text-lg font-bold hover:bg-gray-700 cursor-pointer "
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardDropdownLearn;
