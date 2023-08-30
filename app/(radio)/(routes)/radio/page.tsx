"use client";

import { useState, useRef } from "react";
import gambar from "@/assets/newsImage.png";
import Image from "next/image";

const Radio = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    setPlay(!play);
    if (audioRef.current) {
      if (play) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="bg-[#0A0A23] w-full h-full">
      <div className="flex justify-center text-xl text-white mb-4">
        <p className=" mt-16">
          Welcome to Code Radio. 24/7 music designed for coding.
        </p>
      </div>
      <div className="flex flex-col w-full h-[80%] video-container overflow-hidden absolute">
        <video
          aria-hidden={true}
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          className="w-full object-cover overflow-hidden"
        >
          <source src="/video/videofreecodecamp.mp4" type="video/mp4" />
        </video>
        <footer className="w-full bg-[#0A0A23] text-white text-center z-50 relative ">
          <hr />
          <hr />
          <hr />
          <div className="flex bg-[#0A0A23] justify-between mx-4 max-h-fit ">
            <div className="flex justify-center items-center gap-4 w-full">
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                version="1.1"
                viewBox="0 0 219.15 219.15"
              >
                <g>
                  <path d="M109.575,0C49.156,0,0.001,49.155,0.001,109.574c0,60.42,49.154,109.576,109.573,109.576   c60.42,0,109.574-49.156,109.574-109.576C219.149,49.155,169.995,0,109.575,0z M109.575,204.15   c-52.148,0-94.573-42.427-94.573-94.576C15.001,57.426,57.427,15,109.575,15c52.148,0,94.574,42.426,94.574,94.574   C204.149,161.724,161.723,204.15,109.575,204.15z" />
                  <path d="M166.112,108.111h-52.051V51.249c0-4.142-3.357-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v64.362c0,4.142,3.358,7.5,7.5,7.5   h59.551c4.143,0,7.5-3.358,7.5-7.5C173.612,111.469,170.254,108.111,166.112,108.111z" />
                </g>
              </svg>
              <div className="flex w-full gap-2">
                <Image
                  src={gambar}
                  alt="none"
                  className="object-cover max-w-fit w-1/6"
                />
                <div className="flex flex-col w-full">
                  <div className="flex text-sm">
                    Life inside a nightmare rectangle
                  </div>
                  <div className="flex text-sm">Dotlights</div>
                  <div className="flex text-sm">Chillop daydreams</div>
                  <div className="flex mt-10"></div>
                  {play ? (
                    <div className="flex bg-white p-2 rounded-full"></div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {play ? (
                <div className="absolute flex flex-col items-end right-60">
                  <p>Listeners: 44</p>
                  <select
                    className="text-black"
                    aria-label="Select Stream"
                    data-meta="stream-select"
                    id="stream-select"
                  >
                    <option value="/radio.mp3">
                      <p className="text-black">/radio.mp3 (128kbps MP3)</p>
                    </option>
                    <option value="64kbps">
                      <p className="text-black"> 64kbps MP3</p>
                    </option>
                  </select>
                </div>
              ) : (
                <></>
              )}
              <button onClick={togglePlay}>
                {play ? (
                  <h1 className="text-6xl">⏸</h1>
                ) : (
                  <h1 className="text-6xl">▶</h1>
                )}
              </button>
              <audio ref={audioRef} controls={false}>
                <source src="/music/short.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <input
                type="range"
                max={100}
                min={0}
                step={5}
                value={0}
                onChange={() => console.log("tes")}
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Radio;
