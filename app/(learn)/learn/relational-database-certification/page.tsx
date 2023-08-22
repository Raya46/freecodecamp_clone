import CardDescJS from "@/components/cardDropdownLearn/cardDescJS";
import CardDropdownLearnJS from "@/components/cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "@/components/cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "@/components/dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "@/components/dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "@/components/dummy-data/dummyFrontEndjQuery";
import dummyRelationalDBs from "@/components/dummy-data/dummyRelationalDB";

const RelationalDatabaseCerti = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mx-[16.7rem]">
        <div className="flex text-5xl font-bold mt-5">Relational Database</div>
        <div className="flex justify-center items-center fill-white my-10">
          <svg
            aria-hidden="true"
            viewBox="0 0 448 512"
            className="w-1/3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
          </svg>
        </div>
        <div className="flex text-xl mb-5 w-full">
          For these courses, you will use real developer tools and software
          including VS Code, PostgreSQL, and the Linux / Unix command line to
          complete interactive tutorials and build projects.
        </div>
        <div className="flex text-xl mb-5">
          These courses start off with basic Bash commands. Using the terminal,
          you will learn everything from navigating and manipulating a file
          system, scripting in Bash, all the way to advanced usage.
        </div>
        <div className="flex text-xl mb-10">
          Next, you will learn how to create and use a relational database with
          PostgreSQL, a database management system, and SQL, the language of
          these databases.
        </div>
        <div className="flex text-xl mb-10">
          Finally, you will learn Git, the version control system, an essential
          tool of every developer.
        </div>
        <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
        <div className="flex flex-col w-full">
          {dummyRelationalDBs.map((dbs, index) => (
            <>
              <CardDescJS
                key={index}
                title={dbs.title}
                desc1={dbs.desc1}
                desc2={dbs.desc2}
                desc3=""
                desc4=""
              />
              <CardLiLearnJS key={index} course={dbs.course} />
              <div className="flex py-3 w-full"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelationalDatabaseCerti;
