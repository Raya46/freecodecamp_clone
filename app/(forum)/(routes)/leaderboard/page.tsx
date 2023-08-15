import SearchBarTop from "@/components/searchBarTop";
import Image from "next/image";
import gambarContoh from "@/assets/blogPostser2.jpg";

const LeaderBoard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        <SearchBarTop />
        <div className="flex gap-8 w-full">
          <div className="flex flex-col mb-20 w-full">
            <div className="flex justify-between py-4 w-full border-b border-white">
              <p>Username</p>
              <div className="flex gap-[3.3rem]">
                <p>Received</p>
                <p>Given</p>
                <p>Replies Posted</p>
                <p>Posts Read</p>
                <p>Days Visited</p>
                <p>Solutions</p>
              </div>
            </div>
            <div className="flex justify-between py-4 w-full border-b border-white">
              <div className="w-full flex basis-[50%]">
                <Image src={gambarContoh} alt="none" />
              </div>
              <div className="flex w-full gap-[3.3rem] items-center">
                <p className="w-full text-center">76</p>
                <p className="w-full">218</p>
                <p className="w-full">177</p>
                <p className="w-full text-center">1.4k</p>
                <p className="w-full text-center">7</p>
                <p className="w-full text-center">7</p>
              </div>
            </div>
            {/* <div className="flex flex-col">
              {dummyLatests.map((dummyLatest, index) => (
                <CardLatest
                  key={index}
                  title={dummyLatest.title}
                  tag={dummyLatest.tag}
                  images={dummyLatest.images}
                  replies={dummyLatest.replies}
                  views={dummyLatest.views}
                  activity={dummyLatest.activity}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
