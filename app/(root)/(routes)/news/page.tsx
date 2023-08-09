import Image from "next/image";
import newsImage from "@/assets/newsImage.png";
import person1 from "@/assets/person1.png";

const News = () => {
  return (
    <>
      <div className="bg-[#002EAD] fixed top-11 w-full flex justify-center h-12 items-center text-white">
        Learn to code --{" "}
        <a href="" className="underline hover:no-underline">
          {" "}
          free 3,000-hour curriculum
        </a>
      </div>
      <div className="container mx-auto mt-40">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-8 w-full justify-center">
            <div className="flex">
              <Image src={newsImage} alt="none" />
            </div>
            <div className="flex flex-col gap-3 w-1/2">
              <p>#OPENSOURCE</p>
              <a href="" className="no-underline hover:underline text-2xl">
                How to Find Good First Issues On GitHub
              </a>
              <div className="flex justify-between items-center w-[80%]">
                <div className="flex items-center gap-4">
                  <Image src={person1} alt="none" className="w-8 h-8" />
                  <a href="">JOHN SWANG</a>
                </div>
                <p className="text-md">3 HOURS AGO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
