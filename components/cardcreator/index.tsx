import React from "react";
import Image, { StaticImageData } from "next/image";

const CardCreator = ({
  image,
  name,
  place,
  passion,
  passionLocate,
  desc,
}: {
  image: StaticImageData;
  name: string;
  place: string;
  passion: string;
  passionLocate: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-row bg-[#0A0A23]">
      <Image src={image} alt="none" className="object-cover" />
      {/* {image} */}
      <div className="flex flex-col items-center gap-4 px-10 pt-16">
        <p className="text-xl">
          <b>{name} </b>
          {place}
        </p>
        <p className="text-xl">
          {passion}
          <b> {passionLocate}</b>
        </p>
        <p className="pt-4 text-xl">"{desc}"</p>
      </div>
    </div>
  );
};

export default CardCreator;
