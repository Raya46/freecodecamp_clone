"use client";

import React from "react";
import { useState } from "react";

interface CardQuestionProps {
  text: string;
  desc: string;
  //   onClick: () => void;
}

const CardQuestionDonate: React.FC<CardQuestionProps> = ({ text, desc }) => {
  const [expanded, setExpanded] = useState(false); // State untuk mengontrol apakah card diperluas atau tidak

  const handleCardClick = () => {
    setExpanded((prevState) => !prevState);
    console.log(expanded);
  };

  return (
    <div
      className="flex flex-col w-1/2 hover:bg-gray-600 p-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex gap-3">
        {expanded ? (
          <div className="text-2xl">▼</div>
        ) : (
          <svg viewBox="0 0 100 100" className="fill-white w-[25px]">
            <polygon
              points="-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196"
              transform="matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"
            ></polygon>
          </svg>
        )}

        <span className="w-full text-white">{text}</span>
      </div>

      <div className="flex flex-col">
        <span className={`w-full text-white ${expanded ? "flex" : "hidden"}`}>
          {desc}
        </span>
      </div>
    </div>
  );
};

export default CardQuestionDonate;
