import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "@/components/dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";

const MachineLearningPython = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          Machine Learning with
        </div>
        <div className="flex text-5xl font-bold mt-2">Python </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path>
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

export default MachineLearningPython;
