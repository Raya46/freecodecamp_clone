import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "@/components/dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";

const QualityAssuranceCerti = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">Quality Assurance</div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 384 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M126.2 286.4l64.2-63.6c2.1-2.1 2.1-5.5 0-7.6l-12.6-12.7c-2.1-2.1-5.5-2.1-7.6 0l-47.6 47.2-20.6-20.9c-2.1-2.1-5.5-2.1-7.6 0l-12.7 12.6c-2.1 2.1-2.1 5.5 0 7.6l37.1 37.4c1.9 2.1 5.3 2.1 7.4 0zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336zM112 328c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm168-88h-63.3c-1.3 1.8-2.1 3.9-3.7 5.5L186.2 272H280c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
        <div className="flex text-xl mb-5 w-full">
          Data is all around us, but it doesn't mean much without shape or
          context.
        </div>
        <div className="flex text-xl mb-5">
          In the Data Visualization Certification, you'll build charts, graphs,
          and maps to present different types of data with the D3.js library.
        </div>
        <div className="flex text-xl mb-10">
          You'll also learn about JSON (JavaScript Object Notation), and how to
          work with data online using an API (Application Programming
          Interface).
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
            title="Data Visualization Projects"
            desc1="Now that you learned how to work with D3, APIs, and AJAX technologies, put your skills to the test with these 5 Data Visualization projects."
            desc2="In these projects, you'll need to fetch data and parse a dataset, then use D3 to create different data visualizations. Finish them all to earn your Data Visualization certification."
            desc3=""
            desc4=""
          />
          {dummyDataVisualization.map((fs, index) => (
            <CardLiLearnJS key={index} course={fs.course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityAssuranceCerti;
