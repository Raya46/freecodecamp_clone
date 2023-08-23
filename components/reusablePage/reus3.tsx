import CardCertiLearn from "../cardDropdownLearn/cardCertiLearm";
import CardDescJS from "../cardDropdownLearn/cardDescJS";
import CardDropdownCollege from "../cardDropdownLearn/cardDropdownCollege";
import CardDropdownLearnJS from "../cardDropdownLearn/cardDropdownLearnJS";
import CardLiLearnJS from "../cardDropdownLearn/cardLiLearnJS";
import dummyDataVisualization from "../dummy-data/dummyDataVisualization";
import dummyFrontEndLibraries from "../dummy-data/dummyFronEndLibraries";
import dummyFrontEndjQuerys from "../dummy-data/dummyFrontEndjQuery";
import dummyLearnHTMLS from "../dummy-data/dummyLearnHTML";

interface PageContentProps {
  data: {
    title1: string;
    title2: string;
    logo: JSX.Element;
    desc1: string;
    desc2: string;
    desc3: string;
  }[];
  data2: {
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }[];
}

const PageReuse = ({ data, data2 }: PageContentProps) => (
  <div className="flex flex-col justify-center items-center mx-[16.7rem]">
    {data.map((fl, i) => (
      <>
        <div className="flex text-5xl font-bold mt-5">{fl.title1}</div>
        <div className="flex justify-center items-center fill-white my-10">
          {fl.logo}
        </div>
        <div className="flex text-xl mb-5">{fl.desc1}</div>
        <div className="flex text-xl mb-10">{fl.desc2}</div>
        <div className="flex bg-[#D9EDF7] text-blue-500 text-lg p-5">
          {fl.desc3}
        </div>
      </>
    ))}

    <div className="flex text-4xl font-bold mt-20 mb-10">Courses</div>
    <div className="flex flex-col gap-1 w-full">
      {data2.map((learnHTML, index) => (
        <CardDropdownCollege
          key={index}
          title={learnHTML.title}
          titleExpanded={learnHTML.desc1}
          course1={learnHTML.desc2}
          course2={learnHTML.desc3}
        />
      ))}
      <CardCertiLearn />
    </div>
  </div>
);

export default PageReuse;
