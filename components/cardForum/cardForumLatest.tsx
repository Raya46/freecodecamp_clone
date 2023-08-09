const CardForumLatest = ({
  image,
  title,
  buttonText,
  answer,
  createdAt,
}: {
  image: JSX.Element;
  title: string;
  buttonText: string;
  answer: string;
  createdAt: string;
}) => {
  return (
    <div className="flex w-full justify-between border-t-2 border-t-gray-600">
      <div className="flex gap-4 items-center p-3">
        <div className="flex items-center w-12 h-6 mt-3">{image}</div>
        <div className="flex w-[80%]">
          <div className="flex flex-col mt-4 text-xl">
            {title}
            <div className="flex w-full mt-1">
              <button className="bg-[#86D7FF] text-[#294552] px-1 text-sm">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center ">
        <p>{answer}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default CardForumLatest;
