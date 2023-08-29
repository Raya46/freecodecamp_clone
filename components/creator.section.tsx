"use client";
import React from "react";
import CardCreator from "@/components/cardcreator";
import dataCreator from "@/components/dummy-data/dummyCreator";

const CreatorSection = () => {
  return (
    <div className="flex flex-col p-10 justify-center items-center">
      <h1 className="text-[2.5rem] font-bold pt-4 text-white">
        Here is what our alumni say about freeCodeCamp:
      </h1>
      <div className="flex flex-col p-10 gap-16">
        {dataCreator.map((creator, index) => (
          <CardCreator
            key={index}
            image={creator.image}
            name={creator.name}
            place={creator.place}
            passion={creator.passion}
            passionLocate={creator.passionLocate}
            desc={creator.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatorSection;
