const Radio = () => {
  return (
    <div className="flex flex-col mt-16">
      <div className="flex justify-center text-xl text-white mb-4">
        Welcome to Code Radio. 24/7 music designed for coding.
      </div>
      <div className="flex w-full">
        <video autoPlay loop playsInline muted preload="auto">
          <source src="/video/videofreecodecamp.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Radio;
