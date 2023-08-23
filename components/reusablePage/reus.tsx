import Image, { StaticImageData } from "next/image";

interface PageContentProps {
  data: {
    date: string;
    tags: string;
    title: string;
    image: StaticImageData;
    name: string;
    banner: StaticImageData;
    desc1: string;
    // ... add other description lines ...
  }[];
}

const PageContent = ({ data }: PageContentProps) => (
  <div className="flex flex-col justify-center items-center mt-[5.4rem] w-full text-[#2A2A40]">
    {data.map((fl, index) => (
      <div key={index} className="w-full">
        <p>
          {fl.date} / {fl.tags}
        </p>
        <p>{fl.title}</p>
        <Image src={fl.image} alt="none" />
        <p>{fl.name}</p>
        <Image src={fl.banner} alt="none" />
        <p>{fl.desc1}</p>
        {/* ... render other description lines ... */}
      </div>
    ))}
  </div>
);

export default PageContent;
