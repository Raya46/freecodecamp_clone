"use client";

import { useState } from "react";

const CardDropdownLearnJS = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded((prevState) => !prevState);
    console.log(expanded);
  };
  return (
    <div
      className="flex flex-col bg-[#0A0A23] cursor-pointer p-4"
      onClick={handleCardClick}
    >
      <div className="flex justify-between">
        <div className="flex gap-2">
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
        className={`w-full text-white mt-5  ${
          expanded ? "flex gap-2" : "hidden"
        }`}
      >
        <input type="radio" />
        <p>tes</p>
      </div>
    </div>
  );
};

export default CardDropdownLearnJS;
