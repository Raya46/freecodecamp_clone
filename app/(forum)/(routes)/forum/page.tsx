import personForum from "@/assets/personforum.jpg";
import Image from "next/image";
import dummyForumCourses from "@/components/dummy-data/dummyForumCourses";
import CardForumCourses from "@/components/cardForum/cardForumCourses";
import dummyForumLatest from "@/components/dummy-data/dummyForumLatest";
import CardForumLatest from "@/components/cardForum/cardForumLatest";
import Link from "next/link";
import HeaderForum from "@/components/headerForum";

const Forum = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        {/* <HeaderForum /> */}
        <div className="flex mt-2 w-full">
          <div className="flex bg-[#082345] p-4 border-[#055DB2] w-full">
            <p className="text-[#055DB2]">See 4 new or updated topics</p>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          <div className="flex flex-col mb-20">
            <div className="flex justify-between py-4">
              <p>Subforum</p>
              <p>Topics</p>
            </div>
            {dummyForumCourses.map((forumCourse, index) => (
              <CardForumCourses
                key={index}
                title={forumCourse.title}
                createdAt={forumCourse.createdAt}
                participant={forumCourse.participant}
                desc={forumCourse.desc}
                borderColor={forumCourse.borderColor}
              />
            ))}
            <div className="border-b-2 border-b-gray-600"></div>
          </div>
          <div className="flex w-full flex-col mb-10">
            <div className="flex py-4 ">
              <p>Latest</p>
            </div>
            <div className="flex flex-col">
              {dummyForumLatest.map((forumLatest, index) => (
                <CardForumLatest
                  key={index}
                  image={forumLatest.image}
                  title={forumLatest.title}
                  buttonText={forumLatest.buttonText}
                  answer={forumLatest.answer}
                  createdAt={forumLatest.createdAt}
                />
              ))}

              <div className="flex w-full justify-end ">
                <button className="flex border-2 items-center p-2 px-3">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
