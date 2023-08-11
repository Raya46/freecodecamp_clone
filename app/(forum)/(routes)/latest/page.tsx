import dummyForumCourses from "@/components/dummy-data/dummyForumCourses";
import CardForumCourses from "@/components/cardForum/cardForumCourses";
import dummyForumLatest from "@/components/dummy-data/dummyForumLatest";
import CardForumLatest from "@/components/cardForum/cardForumLatest";

const Latest = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center mx-20 mt-5">
        {/* <HeaderForum /> */}
        <div className="flex gap-8 w-full">
          <div className="flex flex-col mb-20">
            <div className="flex justify-between py-4">
              <p>Topic</p>
              <div className="flex">
                <p>Replies</p>
                <p>Views</p>
                <p>Activity</p>
              </div>
            </div>
            {dummyForumCourses.map((forumCourse, index) => (
              <CardForumCourses
                key={index}
                title={forumCourse.title}
                createdAt={forumCourse.createdAt}
                participant={forumCourse.participant}
                desc={forumCourse.desc}
                borderColor={forumCourse.borderColor}
              />
            ))}
            <div className="border-b-2 border-b-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
