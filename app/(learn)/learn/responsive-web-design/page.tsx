import CardCertiLearn from "@/components/cardDropdownLearn/cardCertiLearm";
import CardDropdownLearn from "@/components/cardDropdownLearn/cardDropdownLearn";
import dummyLearnHTMLS from "@/components/dummy-data/dummyLearnHTML";

const ResponsiveWebDesign = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          Responsive Web Design
        </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            className="w-1/2"
            viewBox="0 0 640 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M112 48h352v48h48V32a32.09 32.09 0 00-32-32H96a32.09 32.09 0 00-32 32v256H16a16 16 0 00-16 16v16a64.14 64.14 0 0063.91 64H352v-96H112zm492 80H420a36 36 0 00-36 36v312a36 36 0 0036 36h184a36 36 0 0036-36V164a36 36 0 00-36-36zm-12 336H432V176h160z"></path>
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
        <div className="flex bg-[#D9EDF7] text-blue-500 text-lg p-5">
          Note: Some browser extensions, such as ad-blockers and dark mode
          extensions can interfere with the tests. If you face issues, we
          recommend disabling extensions that modify the content or layout of
          pages, while taking the course.
        </div>
        <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
        <div className="flex flex-col gap-1 w-full">
          {dummyLearnHTMLS.map((learnHTML, index) => (
            <CardDropdownLearn
              key={index}
              title={learnHTML.title}
              desc1={learnHTML.desc1}
              desc2={learnHTML.desc2}
              lengthCourse={learnHTML.lengthCourse}
            />
          ))}
          <CardCertiLearn />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWebDesign;
