import CardTop from "@/components/cardTop";
import dummyLatests from "@/components/dummy-data/dummyLatest";

const Top = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        <div className="flex gap-8 w-full">
          <div className="flex flex-col mb-20 w-full">
            <div className="flex justify-between py-4 w-full px-4">
              <p className="w-full">Username</p>
              <div className="flex w-1/4">
                <p className="w-full">Replies</p>
                <p className="w-full">Views</p>
                <p className="w-full">Activity</p>
              </div>
            </div>
            <div className="flex flex-col">
              {dummyLatests.map((dummyLatest, index) => (
                <CardTop
                  key={index}
                  title={dummyLatest.title}
                  tag={dummyLatest.tag}
                  images={dummyLatest.images}
                  replies={dummyLatest.replies}
                  views={dummyLatest.views}
                  activity={dummyLatest.activity}
                />
              ))}
            </div>
            <div className="border-b-2 border-b-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
