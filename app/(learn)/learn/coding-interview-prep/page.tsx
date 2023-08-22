import CardCertiLearn from "@/components/cardDropdownLearn/cardCertiLearm";
import CardDropdownCollege from "@/components/cardDropdownLearn/cardDropdownCollege";
import CardDropdownLearn from "@/components/cardDropdownLearn/cardDropdownLearn";
import dummyLearnHTMLS from "@/components/dummy-data/dummyLearnHTML";

const CodingInterviewPrep = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          Coding Interview Prep
        </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 640 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M568 368c-19.1 0-36.3 7.6-49.2 19.7L440.6 343c4.5-12.2 7.4-25.2 7.4-39 0-61.9-50.1-112-112-112-8.4 0-16.6 1.1-24.4 2.9l-32.2-69c15-13.2 24.6-32.3 24.6-53.8 0-39.8-32.2-72-72-72s-72 32.2-72 72 32.2 72 72 72c.9 0 1.8-.2 2.7-.3l33.5 71.7C241.5 235.9 224 267.8 224 304c0 61.9 50.1 112 112 112 30.7 0 58.6-12.4 78.8-32.5l82.2 47c-.4 3.1-1 6.3-1 9.5 0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72zM232 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm104 272c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm232 96c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm-54.4-261.2l-19.2-25.6-48 36 19.2 25.6 48-36zM576 192c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM152 320h48v-32h-48v32zm-88-80c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z"></path>
          </svg>
        </div>
        <div className="flex text-xl mb-5">
          In this Responsive Web Design Certification, you'll learn the
          languages that developers use to build webpages: HTML (Hypertext
          Markup Language) for content, and CSS (Cascading Style Sheets) for
          design.
        </div>
        <div className="flex text-xl mb-10">
          Finally, you'll learn how to make webpages that respond to different
          screen sizes by building a photo gallery with Flexbox, and a magazine
          article layout with CSS Grid.
        </div>
        <div className="flex bg-[#D9EDF7] text-blue-500 text-lg p-5">
          Note: Some browser extensions, such as ad-blockers and dark mode
          extensions can interfere with the tests. If you face issues, we
          recommend disabling extensions that modify the content or layout of
          pages, while taking the course.
        </div>
        <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
        <div className="flex flex-col gap-1 w-full">
          {dummyLearnHTMLS.map((learnHTML, index) => (
            <CardDropdownCollege
              key={index}
              title={learnHTML.title}
              titleExpanded="Your journey begins here as you learn how to set up a Colab Notebook that can run Python code. Then, use the notebook to follow along with the videos to learn ratios and proportions using Python."
              course1={learnHTML.desc1}
              course2={learnHTML.desc2}
            />
          ))}
          <CardCertiLearn />
        </div>
      </div>
    </div>
  );
};

export default CodingInterviewPrep;
