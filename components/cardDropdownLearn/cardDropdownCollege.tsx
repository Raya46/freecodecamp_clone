"use client";

import { useState } from "react";

const CardDropdownCollege = ({
  title,
  titleExpanded,
  course1,
  course2,
}: {
  title: string;
  titleExpanded: string;
  course1: string;
  course2: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded((prevState) => !prevState);
    console.log(expanded);
  };
  return (
    <>
      <div
        className="flex justify-between w-full bg-[#0A0A23] py-7 px-4 cursor-pointer hover:bg-[#2A2A40]"
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
        } flex-col gap-6 w-full bg-[#0A0A23] py-7 px-4`}
      >
        <div className="flex text-xl">{titleExpanded}</div>
        <div className="flex text-xl w-full gap-2">
          <input type="radio" />
          {course1}
        </div>
        <div className="flex text-xl gap-2">
          <input type="radio" />
          {course2}
        </div>
      </div>
    </>
  );
};

export default CardDropdownCollege;
