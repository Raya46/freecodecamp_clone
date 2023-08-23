import dummyLearTes from "@/components/dummy-data/dummyLearnTes";
import PageContent from "@/components/reusablePage/reus2";
import PageReuse from "@/components/reusablePage/reus3";
import { FC } from "react";

interface pageProps {
  params: { slug: string };
}

const page: FC<pageProps> = ({ params }) => {
  console.log(params.slug);
  const { slug } = params;
  const postData = dummyLearTes[slug as keyof typeof dummyLearTes];
  return (
    <div className="container mx-auto w-full">
      {slug === "college-algebra-with-python-certification" ||
      slug === "coding-interview-prep" ? (
        <PageReuse data={postData?.data} data2={postData?.dataCard} />
      ) : (
        <PageContent
          data={postData?.data || []}
          data2={postData?.dataCard}
          data3={postData?.dataCardList}
          data4={postData?.dataCardList2}
        />
      )}
    </div>
  );
};

export default page;
