const CardLiLearnJS = ({ course }: { course: string | undefined }) => {
  return (
    <div className="flex gap-2 hover:bg-gray-600 p-2 px-4 cursor-pointer bg-[#0A0A23]">
      <input type="radio" />
      <p className="text-lg">{course}</p>
    </div>
  );
};

export default CardLiLearnJS;
