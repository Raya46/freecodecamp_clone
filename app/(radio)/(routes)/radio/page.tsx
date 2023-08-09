const Radio = () => {
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
          <div className="flex bg-[#0A0A23] justify-between mt-4 mx-4">
            <div className="flex">
              <svg
                className="w-8 h-8"
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
            </div>
            <div className="flex gap-4">
              <svg viewBox="0 0 100 100" className="fill-white w-[25px]">
                <polygon
                  points="-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196"
                  transform="matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"
                ></polygon>
              </svg>
              <input type="range" max={100} min={0} step={5} value={0} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Radio;
