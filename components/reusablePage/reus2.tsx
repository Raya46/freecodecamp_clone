import CardDescJS from "../cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "../cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "../cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "../dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "../dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "../dummy-data/dummyFrontEndjQuery";

interface PageContentProps {
  data: {
    title1: string;
    title2: string;
    logo: JSX.Element;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }[];
  data2: {
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }[];
  data3: {
    course: string;
  }[];
  data4: {
    course: string;
  }[];
}

const PageContent = ({ data, data2, data3, data4 }: PageContentProps) => (
  <div className="flex flex-col justify-center items-center mx-[16.7rem]">
    {data.map((fl, i) => (
      <>
        <div className="flex text-5xl font-bold mt-5">{fl.title1}</div>
        <div className="flex text-5xl font-bold mt-2">{fl.title2}</div>
        <div className="flex justify-center items-center fill-white my-10">
          {fl.logo}
        </div>
        <div className="flex text-xl mb-5 w-full">{fl.desc1}</div>
        <div className="flex text-xl mb-5">{fl.desc2}</div>
        <div className="flex text-xl mb-10">{fl.desc3}</div>
        {fl.desc4 === "" ? (
          <></>
        ) : (
          <div className="flex bg-[#D9EDF7] text-blue-500 text-lg p-5">
            {fl.desc4}
          </div>
        )}
      </>
    ))}
    <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
    <div className="flex flex-col w-full">
      {/* {data2.map((fl, i) => ( */}
      <CardDescJS
        title={data2[0].title}
        desc1={data2[0].desc1}
        desc2={data2[0].desc2}
        desc3={data2[0].desc3}
        desc4={data2[0].desc4}
      />
      {/* ))} */}

      <CardDropdownLearnJS
        passed="29"
        children={data3.map((ls, index) => (
          <CardLiLearnJS course={ls.course} key={index} />
        ))}
      />
      <div className="flex py-3 w-full"></div>

      <CardDescJS
        title={data2[1].title}
        desc1={data2[1].desc1}
        desc2={data2[1].desc2}
        desc3={data2[1].desc3}
        desc4={data2[1].desc4}
      />
      {data4.map((fs, index) => (
        <CardLiLearnJS key={index} course={fs.course} />
      ))}
      {/* <div className="flex py-3 w-full"></div>
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
      ))} */}
    </div>
  </div>
);

export default PageContent;
