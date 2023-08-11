import Link from "next/link";

const QuestionSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-14 text-white">
      <div className="flex flex-row text-5xl">Frequently asked questions:</div>
      <div className="flex flex-col font-bold text-xl mt-10 ">
        What exactly is freeCodeCamp?
      </div>
      <div className="flex flex-col text-md">
        freeCodeCamp is a community of people from all around the world who are
        learning to code together. We're a 501(c)(3) public charity.
      </div>
      <div className="flex flex-col font-bold text-xl ">
        How will freeCodeCamp help me learn to code?
      </div>
      <div className="flex flex-col text-md">
        You will learn to code by building dozens of projects, step-by-step,
        right in your browser, code editor, or mobile app. You will also earn
        free verified certifications along the way.
      </div>
      <div className="flex flex-col font-bold text-xl ">
        Is freeCodeCamp really free?
      </div>
      <div className="flex flex-col text-md">
        Yes. Every aspect of freeCodeCamp is 100% free. The courses, the
        projects, and even the certifications.
      </div>
      <div className="flex flex-col font-bold text-xl">
        Can freeCodeCamp help me get a job as a software developer?
      </div>
      <div className="flex flex-col text-md">
        Yes. Every year, thousands of people who join the freeCodeCamp community
        get their first software developer job.
      </div>
      <div className="flex flex-col font-bold text-xl">
        What skills will I learn?
      </div>
      <div className="flex flex-col text-md">
        You will learn the skills most developers use on the job: HTML, CSS,
        JavaScript, Python, Linux, Git, and SQL, and more. You'll also learn how
        to use powerful libraries for web development, mobile app development,
        data science, and artificial intelligence.
      </div>
      <div className="flex flex-col font-bold text-xl">
        How long does it take to learn all this?
      </div>
      <div className="flex flex-col text-md">
        freeCodeCamp is self-paced. Realistically, it may take several years of
        practicing coding to learn these skills well enough to get a job as a
        software engineer. Don't quit school or your day job until you feel
        ready.
      </div>
      <div className="flex flex-col font-bold text-xl">
        How do I get started?
      </div>
      <div className="flex flex-col text-md">
        If you're a beginner, you should start at the beginning of the
        freeCodeCamp core curriculum. If you're more advanced, we still
        recommend starting at the beginning, but you can skip to whatever area
        you wish.
      </div>
      <div className="flex flex-col font-bold text-xl">
        How do I earn the free verified certifications?
      </div>
      <div className="flex flex-col text-md">
        For each certification, you need to build its 5 certification projects,
        and get all of the project tests to pass to be able to claim your
        certification.
      </div>
      <div className="flex flex-col font-bold text-xl">
        I don't see [name of tool] in the freeCodeCamp core curriculum.
      </div>
      <div className="flex flex-col text-md">
        Aside from the freeCodeCamp core curriculum, We have thousands of free,
        full-length books, courses, and programming tutorials. We almost
        certainly teach whatever programming tools you want to learn. Just use
        the search bar.
      </div>
      <div className="flex flex-col font-bold text-xl mt-5 text-white">
        Happy coding!
      </div>
      <div className="flex justify-center items-center h-full w-full mb-10">
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

export default QuestionSection;
