const CardForumCourses = ({
  title,
  desc,
  participant,
  createdAt,
  borderColor,
}: {
  title: string;
  desc: string;
  participant: string;
  createdAt: string;
  borderColor: string;
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col ${borderColor} border-l-8 border-t-2 border-t-gray-600`}
      >
        <div className="flex justify-between py-4 px-4">
          <p>{title}</p>
          <p>
            {participant}/{createdAt}
          </p>
        </div>
        <div className="flex w-[80%] px-4 pb-3">{desc}</div>
      </div>
    </div>
  );
};

export default CardForumCourses;
