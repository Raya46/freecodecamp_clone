import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "@/components/dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "@/components/dummy-data/dummyFrontEndjQuery";
import dummyLearnJSs from "@/components/dummy-data/dummyLearnJS";
import dummyLearnJSES6 from "@/components/dummy-data/dummyLearnJSES6";

const DataVisualizationCerti = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">Data Visualization</div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="-10 -10 116 111"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h7.75a45.5 45.5 0 110 91H0V71h7.75a25.5 25.5 0 100-51H0zm36.251 0h32a27.75 27.75 0 0121.331 45.5A27.75 27.75 0 0168.251 91h-32a53.69 53.69 0 0018.746-20H68.25a7.75 7.75 0 100-15.5H60.5a53.69 53.69 0 000-20h7.75a7.75 7.75 0 100-15.5H54.997A53.69 53.69 0 0036.251 0z"></path>
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

export default DataVisualizationCerti;
