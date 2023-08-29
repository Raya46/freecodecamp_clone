"use client";
import React from "react";
import Image from "next/image";
import groupLogo from "@/assets/grouplogo.png";

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-14 gap-9">
      <h1 className="text-4xl">As seen in:</h1>
      <div className="flex flex-row">
        <Image
          src={groupLogo}
          alt="none"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default AboutSection;
