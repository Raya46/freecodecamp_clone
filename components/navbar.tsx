"use client";

import Image from "next/image";
import gambar from "@/assets/logo-nav.png";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex w-full fixed mx-auto top-0 z-50">
      <div className="flex w-full justify-between bg-[#0A0A23] px-3 py-1">
        <div className="flex w-1/2 items-center relative">
          <svg
            className="ais-SearchBox-submitIcon fill-[#D0D0CD] absolute z-10 ml-3"
            height="15"
            viewBox="0 0 40 40"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
          </svg>
          <input
            type="text"
            className="bg-[#3B3B4F] relative w-[33rem] pl-10 h-7"
            placeholder="Search 9,000+ tutorials"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center text-white text-center ml-14">
            <Link href="/">
              <Image
                src={gambar}
                alt="none"
                className="object-cover"
                width={225}
                height={225}
              />
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button className="border border-white text-white p-1 hover:bg-white ">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.62964 15.5H21.3704"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.62964 8.5H21.3704"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              className="border border-white text-white py-1 px-3 hover:bg-white hover:text-black"
              onClick={() => setShowModal(!showModal)}
            >
              Menu
            </button>
            <div
              className={`flex-col gap-7 absolute mt-[22rem] bg-[#0A0A23] ${
                showModal ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col justify-center">
                <Link href="/donate">
                  <div className="p-3 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    Donate
                  </div>
                </Link>
                <Link href="/curriculum">
                  <div className="p-3 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    Curriculum
                  </div>
                </Link>
              </div>
              <hr />
              <div className="py-4 flex flex-col gap-3">
                <Link href="/forum">
                  <div className="flex justify-between px-4 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    Forum
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      height={20}
                      width={20}
                      data-icon="up-right-from-square"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      ></path>
                    </svg>
                  </div>
                </Link>

                <Link href="/news">
                  <div className="flex justify-between px-4 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    News
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      height={20}
                      width={20}
                      data-icon="up-right-from-square"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      ></path>
                    </svg>
                  </div>
                </Link>

                <Link href="/radio">
                  <div className="flex justify-between px-4 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    Radio
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      height={20}
                      width={20}
                      data-icon="up-right-from-square"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      ></path>
                    </svg>
                  </div>
                </Link>

                <Link href="/contribute">
                  <div className="flex justify-between px-4 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                    Contribute
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      height={20}
                      width={20}
                      data-icon="up-right-from-square"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>

              <hr />
              <div className="px-4 py-4 bg-[#0A0A23] hover:bg-[#D0D0CD] hover:text-black">
                <Link href="/sign-in">Sign in to change theme</Link>
              </div>
            </div>
            <button className="border border-[#FEAC32] bg-[#FFBC3F] h-full py-1 px-3">
              <Link href="/sign-in" className="text-black">
                Sign in
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
