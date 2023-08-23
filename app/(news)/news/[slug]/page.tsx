import dummyNewsData from "@/components/dummy-data/dummyNewsSlug";
import PageContent from "@/components/reusablePage/reus";
import Image from "next/image";
import { FC } from "react";

interface pageProps {
  params: { slug: string };
}

const page: FC<pageProps> = ({ params }) => {
  console.log(params.slug);
  const { slug } = params;
  const postData = dummyNewsData[slug as keyof typeof dummyNewsData];
  return (
    <div className="bg-white">
      <div className="bg-[#002EAD] fixed top-10 w-full flex justify-center h-12 items-center text-white">
        Learn to code --{" "}
        <a href="" className="underline hover:no-underline">
          {" "}
          free 3,000-hour curriculum
        </a>
      </div>
      <div className="container mx-auto w-full">
        <PageContent data={postData?.data || []} />
      </div>
    </div>
  );
};

export default page;
