import Link from "next/link";

const Curriculum = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col justify-center items-center gap-10 mt-10 text-white">
        <div className="flex">
          <p className="text-2xl mb-5">Welcome to freeCodeCamp's curriculum.</p>
        </div>
        <div className="flex">
          <p className="text-xl mb-3">Please slow down and read this.</p>
        </div>
        <div className="mx-60">
          <p className="text-xl">
            freeCodeCamp is a proven path to your first software developer job.{" "}
            <br />
            <br />
            More than 40,000 people have gotten developer jobs after completing
            this – including at big companies like Google and Microsoft. <br />
            <br /> If you are new to programming, we recommend you start at the
            beginning and earn these certifications in order. <br />
            <br /> To earn each certification, build its 5 required projects and
            get all their tests to pass. <br />
            <br /> You can add these certifications to your résumé or
            LinkedIn.br
            <br />
            But more important than the certifications is the practice you get
            along the way. <br />
            <br /> If you feel overwhelmed, that is normal. Programming is hard.
            Practice is the key. Practice, practice, practice. And this
            curriculum will give you thousands of hours of hands-on programming
            practice. <br />
            <br /> And if you want to learn more math and computer science
            theory, we also have thousands of hours of video courses on
            freeCodeCamp's YouTube channel. <br />
            <br /> If you want to get a developer job or freelance clients,
            programming skills will be just part of the puzzle. <br />
            <br /> You also need to build your personal network and your
            reputation as a developer. <br />
            <br /> You can do this on LinkedIn and GitHub, and also on the
            freeCodeCamp forum. Happy coding! - Quincy Larson, the teacher who
            founded freeCodeCamp.org
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full my-10">
        <Link
          href="/sign-in"
          className="border-4 border-[#FEAC32] bg-[#FFBC3F] h-full py-3 w-[30rem] flex items-center justify-center"
        >
          <p className="text-black text-xl">
            Sign in to save your progress (it's free)
          </p>
        </Link>
      </div>
      {/* <div className="flex flex-col gap-3 mx-60 mb-24">
        {dataCourse.map((course, index) => (
          <CardQuestion
            key={index}
            logoLeft={course.logoLeft}
            text={course.text}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Curriculum;
