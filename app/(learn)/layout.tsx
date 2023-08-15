import CardQuestion from "@/components/cardquestion";
import dataCourse from "@/components/dummy-data/dummyCourses";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import React from "react";

const LayoutLearn = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed w-full mx-auto top-0 z-50">
        <Navbar />
      </div>
      <div className="mt-20">{children}</div>
      <div className="flex flex-col gap-3 mx-60 mb-24">
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
