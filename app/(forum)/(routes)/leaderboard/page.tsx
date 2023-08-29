import SearchBarTop from "@/components/searchBarTop";
import Image from "next/image";
import gambarContoh from "@/assets/blogPostser2.jpg";

const LeaderBoard = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <SearchBarTop />
            <p className="text-sm mt-4">Last Updated: Aug 22, 2023 10:48 am</p>
          </div>
          <div className="flex items-center justify-center w-1/2 gap-3">
            <p className="w-1/2 text-end">291769 users</p>
            <input
              type="text"
              className="bg-[#1B1B32] border-white border p-2 w-1/2"
              placeholder="filter by username"
            />
          </div>
        </div>

        <div className="flex gap-8 w-full mt-4">
          <div className="flex flex-col mb-20 w-full">
            <div className="flex justify-between py-4 w-full border-b border-white">
              <p>Username</p>
              <div className="flex gap-[3.3rem]">
                <p className="text-red-500">❤ Received</p>
                <p className="text-red-500">❤ Given</p>
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
              <div className="flex w-full gap-[3.3rem] items-center text-xl">
                <p className="w-full">76</p>
                <p className="w-full">218</p>
                <p className="w-full">177</p>
                <p className="w-full text-center">1.4k</p>
                <p className="w-full text-center">7</p>
                <p className="w-full text-center">7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
