import Image from "next/image";
import newsImage from "@/assets/newsImage.png";
import person1 from "@/assets/person1.png";
import dummyNews from "@/components/dummy-data/dummyNews";
import CardNews from "@/components/cardNews";

const News = () => {
  return (
    <div className="bg-white">
      <div className="bg-[#002EAD] fixed top-10 w-full flex justify-center h-12 items-center text-white">
        Learn to code --{" "}
        <a href="" className="underline hover:no-underline">
          {" "}
          free 3,000-hour curriculum
        </a>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-8 w-full justify-center mt-40 mb-14">
              <div className="flex flex-col gap-8">
                {dummyNews.map((dummyNew, index) => (
                  <CardNews
                    key={index}
                    image={dummyNew.image}
                    hashtag={dummyNew.hashtag}
                    namePerson={dummyNew.namePerson}
                    createdAt={dummyNew.createdAt}
                    imagePerson={dummyNew.imagePerson}
                    title={dummyNew.title}
                  />
                ))}
              </div>
            </div>
            <button className="flex w-1/2 border-black border bg-gray-300 px-4 py-2 mb-8 text-black justify-center">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
