import CardCertiLearn from "@/components/cardDropdownLearn/cardCertiLearm";
import CardDropdownCollege from "@/components/cardDropdownLearn/cardDropdownCollege";
import CardDropdownLearn from "@/components/cardDropdownLearn/cardDropdownLearn";
import dummyLearnHTMLS from "@/components/dummy-data/dummyLearnHTML";

const CollegeAlgebraPython = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          College Algebra with Python
        </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 640 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289 24.2C292.5 10 305.3 0 320 0H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H345L239 487.8c-3.2 13-14.2 22.6-27.6 24s-26.1-5.5-32.1-17.5L76.2 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c12.1 0 23.2 6.8 28.6 17.7l73.3 146.6L289 24.2zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"></path>
          </svg>
        </div>
        <div className="flex text-xl mb-5">
          In this Responsive Web Design Certification, you'll learn the
          languages that developers use to build webpages: HTML (Hypertext
          Markup Language) for content, and CSS (Cascading Style Sheets) for
          design.
        </div>
        <div className="flex text-xl mb-5">
          First, you'll build a cat photo app to learn the basics of HTML and
          CSS. Later, you'll learn modern techniques like CSS variables by
          building a penguin, and best practices for accessibility by building a
          quiz site.
        </div>
        <div className="flex text-xl mb-10">
          Finally, you'll learn how to make webpages that respond to different
          screen sizes by building a photo gallery with Flexbox, and a magazine
          article layout with CSS Grid.
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

export default CollegeAlgebraPython;
