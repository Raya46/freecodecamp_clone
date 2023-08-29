import React from "react";
import AboutSection from "@/components/about.section";
import HeroSection from "@/components/hero.section";
import CreatorSection from "@/components/creator.section";
import CourseSection from "@/components/course.section";
import QuestionSection from "@/components/question.section";

const RootPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <section id="hero" className="flex justify-center container mx-auto">
          <HeroSection />
        </section>
        <section id="about" className="flex justify-center bg-[#3B3B4F] w-full">
          <AboutSection />
        </section>
        <section id="creator">
          <CreatorSection />
        </section>
        <section id="courses">
          <CourseSection />
        </section>
      </div>
      <section id="questions" className="flex justify-center mx-56">
        <QuestionSection />
      </section>
    </div>
  );
};

export default RootPage;
