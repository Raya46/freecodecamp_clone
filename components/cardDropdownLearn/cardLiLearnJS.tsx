const CardLiLearnJS = ({ course }: { course: string | undefined }) => {
  return (
    <div className="flex gap-2 hover:bg-gray-600 p-2">
      <input type="radio" />
      <p>{course}</p>
    </div>
  );
};

export default CardLiLearnJS;
