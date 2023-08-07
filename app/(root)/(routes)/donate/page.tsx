"use client";

import gambar from "@/assets/landingfcc.png";
import CardQuestionDonate from "@/components/cardQuestionDonate";
import dataQuestions from "@/components/dummy-data/dummyQuestion";
import Image from "next/image";
import { useState } from "react";

const DonatePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col p-10 ">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 text-white">
            <div className="flex justify-center text-2xl">Help us do more</div>
            <p>freeCodeCamp is a highly efficient education charity.</p>
            <p>
              When you donate to freeCodeCamp, you help people learn new skills
              and provide for their families.
            </p>
            <p>
              You also help us create new resources for you to use to expand
              your own technology skills.
            </p>
            <p>
              Your $5 donation will provide 250 hours of learning to people
              around the world each month.
            </p>
            <p className="text-xl">Confirm your donation of $5 / month:</p>
          </div>
          <div className="flex flex-col">
            <Image src={gambar} alt="none" />
            <div className="flex justify-center pt-3 text-lg">
              freeCodeCamp students at a local study group in South Korea.
            </div>
          </div>
        </div>
        <div className="w-1/3 mx-20">
          <div className="flex items-center gap-2 absolute bg-[#1B1B32] px-1 ml-3">
            <svg
              aria-hidden="true"
              width={17}
              height={17}
              focusable="false"
              data-prefix="fas"
              data-icon="lock"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
              ></path>
            </svg>
            <p>Secure donation</p>
          </div>
          <div className="flex flex-col gap-4 border-2 border-[#3B3B4F] p-4 mt-3 pt-10 rounded-md">
            <div className="flex justify-start">
              <button className="flex justify-center p-2 bg-[#FFC439] rounded-lg w-full">
                <span className="text-[#003087] font-bold">Pay</span>
                <span className="text-[#009CDE] font-bold">Pal</span>
              </button>
            </div>
            <div className="flex justify-start">
              <button className="flex justify-center p-2 w-full items-center gap-1 bg-[#353738] rounded-lg">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMTgiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMy4wMDAwMDAsIC02LjAwMDAwMCkiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTguMjc1MjEzMzgsMTIuNTEyMjY1MyBDNy45MzAwMzU0MiwxMi41MTIyNjUzIDcuNjUwMjEzMzgsMTIuMjMyNDQzMiA3LjY1MDIxMzM4LDExLjg4NzI2NTMgQzcuNjUwMjEzMzgsMTEuNTQyMDg3MyA3LjkzMDAzNTQyLDExLjI2MjI2NTMgOC4yNzUyMTMzOCwxMS4yNjIyNjUzIEwyNC43ODc5MDQyLDExLjI2MjI2NTMgQzI1LjU5NTU5MzksMTEuMjYyMjY1MyAyNi4yNSwxMS45MTc1OTA1IDI2LjI1LDEyLjcyNTUzNjggTDI2LjI1LDIyLjI4NjcyODQgQzI2LjI1LDIzLjA5NDY3NDggMjUuNTk1NTkzOSwyMy43NSAyNC43ODc5MDQyLDIzLjc1IEw1LjIxMjMxMzAyLDIzLjc1IEM0LjQwNDYyMzI1LDIzLjc1IDMuNzUsMjMuMDk0Njc0OCAzLjc1LDIyLjI4NjczOTcgTDMuNzUsNy43MTMyNzE1MiBDMy43NSw2LjkwNTMyNTE4IDQuNDA0NDA2MDgsNi4yNSA1LjIxMjI3MjEyLDYuMjUgTDI0Ljc4ODA2NjQsNi4yNTU1MjE2MyBDMjUuNTk1NjA3OSw2LjI1NTczMTQ3IDI2LjI1LDYuOTEwOTk1MDcgMjYuMjUsNy43MTg3MDM2MiBMMjYuMjUsOS4yMzU3NzE2MSBDMjYuMjUsOS41ODA5NDk1OCAyNS45NzAyNjc1LDkuODYwODExNjggMjUuNjI1MDg5NSw5Ljg2MDg2MTEyIEMyNS4yNzk5MTE1LDkuODYwOTEwNTUgMjUuMDAwMDQ5NCw5LjU4MTEyODYgMjUsOS4yMzU5NTA2MyBMMjQuOTk5NzgyNyw3LjcxODc5MzEzIEMyNC45OTk3ODI3LDcuNjAwODMxODkgMjQuOTA0NjYxMSw3LjUwNTU1MTk3IDI0Ljc4NzcyNzgsNy41MDU1MjE1OCBMNS4yMTIwOTU4Myw3LjQ5OTk5OTk4IEM1LjA5NTE1NTA2LDcuNDk5OTk5OTggNSw3LjU5NTI4ODY4IDUsNy43MTMyNjAyOCBMNS4wMDAyMTcxOCwyMi4yODY3Mjg0IEM1LjAwMDIxNzE4LDIyLjQwNDcxMTMgNS4wOTUzNzIyMywyMi41IDUuMjEyMzEzMDIsMjIuNSBMMjQuNzg3OTA0MiwyMi41IEMyNC45MDQ4NDUsMjIuNSAyNSwyMi40MDQ3MTEzIDI1LDIyLjI4NjcyODQgTDI1LDEyLjcyNTUzNjggQzI1LDEyLjYwNzU1NCAyNC45MDQ4NDQ5LDEyLjUxMjI2NTMgMjQuNzg3OTA0MiwxMi41MTIyNjUzIEw4LjI3NTIxMzM4LDEyLjUxMjI2NTMgWiIgaWQ9IlN0cm9rZS0xIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4"
                  alt=""
                />
                <span className="text-white">Kartu Debit atau Kredit</span>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-xs mr-2">Ditunjang teknologi</span>
              <span className="text-[#003087] font-bold">Pay</span>
              <span className="text-[#009CDE] font-bold">Pal</span>
            </div>
            <div className="flex justify-start">
              <button className="flex justify-center items-center w-full bg-white text-red-600 p-2 rounded-lg font-bold">
                P A T R E O N
              </button>
            </div>
          </div>
        </div>
        <hr className="w-1/2 mt-24 " />

        <div className="flex flex-col mx-20 justify-center items-center w-1/3">
          <p className="text-xl text-white mt-4 mb-10">
            Frequently asked questions
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {dataQuestions.map((dataQuestion, index) => (
            <CardQuestionDonate
              key={index}
              text={dataQuestion.question}
              desc={dataQuestion.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
