"use client";

import { useState } from "react";
import CardLiLearnJS from "./cardLiLearnJS";
import dummyLearnJSs from "../dummy-data/dummyLearnJS";

const CardDropdownLearnJS = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded((prevState) => !prevState);
    console.log(expanded);
  };
  return (
    <div
      className="flex flex-col bg-[#0A0A23] cursor-pointer p-2"
      onClick={handleCardClick}
    >
      <div className="flex justify-between hover:bg-gray-600 p-2">
        <div className="flex gap-2 ">
          {expanded ? (
            <div className="text-lg">▼</div>
          ) : (
            <svg viewBox="0 0 100 100" className="fill-white w-[15px]">
              <polygon
                points="-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196"
                transform="matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"
              ></polygon>
            </svg>
          )}
          <p>Expand Course</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input type="radio" />
          <p>0/113</p>
        </div>
      </div>
      <div
        className={`w-full text-white mt-2 ${
          expanded ? "flex flex-col gap-2" : "hidden"
        }`}
      >
        {dummyLearnJSs.map((learnJS, index) => (
          <CardLiLearnJS course={learnJS.course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardDropdownLearnJS;
