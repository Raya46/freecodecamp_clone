"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CardQuestion = ({
  text,
  logoLeft,
  permalink,
}: {
  text: string;
  logoLeft: JSX.Element;
  permalink: string;
}): JSX.Element => {
  const router = useRouter();

  const navigateToSlug = (slug: string) => {
    router.push(`/learn/${slug}`);
  };
  return (
    <div onClick={() => navigateToSlug(permalink)} className="group">
      <div className="flex cursor-pointer group-hover:bg-[#F5F6F7] bg-[#3B3B4F] border-[#F5F6F7] border-2 p-4 items-center justify-between">
        <div className="flex items-center gap-4 fill-white group-hover:fill-[#3B3B4F]">
          {logoLeft}
          <p className="text-xl text-white group-hover:text-[#3B3B4F]">
            {text}
          </p>
        </div>
        <svg
          aria-hidden="true"
          height="20px"
          version="1.1"
          viewBox="0 0 16 20"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#F5F6F7] group-hover:fill-[#3B3B4F]"
        >
          <g>
            <polygon points="-2.68014473e-15 -1.06357708e-13 2.01917516 -1.06357708e-13 8.99824941 9.00746464 2.01917516 18.0149293 -2.66453526e-15 18.0149293 7.00955027 9"></polygon>
            <polygon points="7.99971435 -1.06357708e-13 10.0188895 -1.06357708e-13 16.9979638 9.00746464 10.0188895 18.0149293 7.99971435 18.0149293 15.0092646 9"></polygon>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CardQuestion;
