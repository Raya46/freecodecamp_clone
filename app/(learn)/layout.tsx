import CardQuestion from "@/components/cardquestion";
import dataCourse from "@/components/dummy-data/dummyCourses";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import React from "react";

const LayoutLearn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed w-full mx-auto top-0 z-50">
        <Navbar />
      </div>
      <div className="mt-20">{children}</div>
      <div className="flex flex-col gap-3 mx-[18.9rem] mb-24">
        <div className="flex flex-col justify-center items-center mb-10 mt-32">
          <Link
            href="/sign-in"
            className="border-4 border-[#FEAC32] bg-[#FFBC3F] h-full py-2 w-[30rem] flex items-center justify-center"
          >
            <p className="text-black text-2xl">
              Sign in to save your progress (it's free)
            </p>
          </Link>
          <div className="flex text-3xl justify-center items-center mt-10">
            Browse our other free certifications
          </div>
          <div className="flex text-3xl justify-center items-center">
            (we recommend doing these in order)
          </div>
        </div>
        {dataCourse.map((course, index) => (
          <CardQuestion
            key={index}
            logoLeft={course.logoLeft}
            text={course.text}
            permalink={course.permalink}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default LayoutLearn;
