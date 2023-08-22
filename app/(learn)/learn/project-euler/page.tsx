import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "@/components/dummy-data/dummyFrontEndjQuery";

const ProjectEuler = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">Project Euler</div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/3"
            version="1.1"
            viewBox="0 0 245.827 245.827"
          >
            <path d="M223.336,148.384l-0.137-23.527l22.628-12.662L122.576,47.195L0,113.495l49.144,28.216     l0.098,16.766l0.01,1.339l0.449-0.215c-0.518,0.703-0.85,1.426-0.84,2.149c0.039,8.246,33.326,14.772,74.41,14.548     c41.064-0.215,74.302-7.122,74.273-15.349c0-0.723-0.381-1.426-0.889-2.149l0.449,0.215v-1.339l-0.088-16.834l21.309-13.258     l0.117,20.83c-2.345,1.006-3.976,3.312-3.957,6.009c0.02,3.537,2.892,6.399,6.458,6.37c3.586-0.02,6.429-2.912,6.409-6.439     C227.332,151.657,225.691,149.371,223.336,148.384z M123.241,170.621c-36.452,0.205-66.017-3.801-66.046-8.91     c-0.029-5.11,29.496-9.399,65.949-9.585c36.462-0.205,66.017,3.781,66.037,8.881     C189.209,166.098,159.703,170.426,123.241,170.621z M195.335,127.183c-4.934-5.188-22.618-18.886-72.426-18.602     c-49.877,0.264-67.336,14.128-72.211,19.394l-0.029-4.963c0,0,14.147-21.524,72.202-21.827     c58.025-0.313,72.436,21.045,72.436,21.045L195.335,127.183z M215.755,162.199l-2.511,36.433     c7.767-12.203,14.255-7.66,14.255-7.66l-0.156-28.832C218.998,165.414,215.755,162.199,215.755,162.199z"></path>
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

export default ProjectEuler;
