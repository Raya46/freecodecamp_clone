import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "@/components/dummy-data/dummyFrontEndjQuery";

const LegacyResponsiveChallenge = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="bg-[#D9EDF7] text-blue-500 text-lg p-5 mt-5">
          These courses are no longer part of the certification path, but are
          still available for you to further your learning.
          <u>Go to the current version of the curriculum. </u>
        </div>
        <div className="flex text-5xl font-bold mt-5">
          Legacy Responsive Web
        </div>
        <div className="flex text-5xl font-bold mt-2">Design Challenges</div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 640 512"
            className="w-1/3"
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

        <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
        <div className="flex flex-col w-full">
          <CardDescJS
            title="Data Visualization with D3"
            desc1="D3, or D3.js, stands for Data Driven Documents. It's a JavaScript library for creating dynamic and interactive data visualizations in the browser."
            desc2="D3 is built to work with common web standards – namely HTML, CSS, and Scalable Vector Graphics (SVG)."
            desc3="D3 supports many different kinds of input data formats. Then, using its powerful built-in methods, you can transform those data into different charts, graphs, and maps."
            desc4="In the Data Visualization with D3 courses, you'll learn how to work with data to create different charts, graphs, hover elements, and other ingredients to create dynamic and attractive data visualizations."
          />
          <CardDropdownLearnJS
            passed="29"
            children={dummyFrontEndLibraries.map((ls, index) => (
              <CardLiLearnJS course={ls.course} key={index} />
            ))}
          />
          <div className="flex py-3 w-full"></div>
          <CardDescJS
            title="JSON APIs and AJAX"
            desc1="Similar to how UIs help people use programs, APIs (Application Programming Interfaces) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data."
            desc2="Programmers often use AJAX (Asynchronous JavaScript and XML) when working with APIs. AJAX refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. And the data transferred between the browser and server is often in a format called JSON (JavaScript Object Notation)."
            desc3="This course will teach you the basics about working with APIs and different AJAX technologies in the browser."
            desc4=""
          />
          <CardDropdownLearnJS
            passed="10"
            children={dummyFrontEndjQuerys.map((fs, index) => (
              <CardLiLearnJS course={fs.course} key={index} />
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default LegacyResponsiveChallenge;
