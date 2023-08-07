import CardQuestion from "./cardquestion";
import dataCourse from "@/components/dummy-data/dummyCourses";

const CourseSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-5xl text-white">
        Earn free verified certifications in:
      </h1>
      <div className="flex flex-col gap-3">
        {dataCourse.map((course, index) => (
          <CardQuestion
            key={index}
            logoLeft={course.logoLeft}
            text={course.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
