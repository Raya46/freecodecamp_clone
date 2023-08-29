"use client";
import Link from "next/link";
import CardQuestion from "./cardquestion";
import dataCourse from "@/components/dummy-data/dummyCourses";

const CourseSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl text-white">
        Earn free verified certifications in:
      </h1>
      <div className="flex flex-col gap-3">
        {dataCourse.map((course, index) => (
          <CardQuestion
            key={index}
            logoLeft={course.logoLeft}
            text={course.text}
            permalink={course.permalink}
          />
        ))}
      </div>
      <div className="flex justify-center items-center h-full w-full">
        <Link
          href="/sign-in"
          className="border-4 border-[#FEAC32] bg-[#FFBC3F] h-full py-3 w-[30rem] flex items-center justify-center"
        >
          <p className="text-black text-xl">Get started (it's free)</p>
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
