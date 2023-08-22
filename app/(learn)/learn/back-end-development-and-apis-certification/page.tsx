import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "@/components/dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "@/components/dummy-data/dummyFrontEndjQuery";
import dummyLearnJSs from "@/components/dummy-data/dummyLearnJS";
import dummyLearnJSES6 from "@/components/dummy-data/dummyLearnJSES6";

const BackendDevelopmentCerti = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">
          Back End Development and
        </div>
        <div className="flex text-5xl font-bold mt-2">APIs </div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 512 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M424 400c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-88-24c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm64-144c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm176-72a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 208v96a47.758 47.758 0 01-6.438 24A47.758 47.758 0 01512 352v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 304v-96a47.758 47.758 0 016.438-24A47.758 47.758 0 010 160V64c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v96zm-464 0h416V64H48v96zm416 48H48v96h416v-96zm0 144H48v96h416v-96zm-64-216c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm-64 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"></path>
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

export default BackendDevelopmentCerti;
