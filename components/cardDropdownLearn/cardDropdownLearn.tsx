"use client";

import { useState } from "react";

const CardDropdownLearn = () => {
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
          <p>Learn HTML by Building a Cat Photo App</p>
        </div>
        <p>v</p>
      </div>
      <div
        className={`${
          expanded ? "flex" : "hidden"
        } flex-col gap-2 w-full bg-[#0A0A23] p-6`}
      >
        <div className="flex">
          HTML tags give a webpage its structure. You can use HTML tags to add
          photos, buttons, and other elements to your webpage.
        </div>
        <div className="flex">
          In this course, you'll learn the most common HTML tags by building
          your own cat photo app.
        </div>
        <button className="border-white border bg-[#3B3B4F] text-white p-2 w-1/5">
          Start Project
        </button>
        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {Array.from({ length: 25 }, (_, index) => (
            <div
              key={index}
              className="w-14 h-14 flex items-center justify-center border-dashed border border-gray-600 text-lg font-bold"
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
