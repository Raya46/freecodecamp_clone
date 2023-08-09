const CardNews = ({
  image,
  hashtag,
  title,
  imagePerson,
  namePerson,
  createdAt,
}: {
  image: JSX.Element;
  hashtag: string;
  title: string;
  imagePerson: JSX.Element;
  namePerson: string;
  createdAt: string;
}) => {
  return (
    <div className="flex justify-center gap-8">
      <div className="flex">{image}</div>
      <div className="flex flex-col gap-3 w-1/2">
        <p className="text-black">{hashtag}</p>
        <a href="" className="no-underline hover:underline text-2xl text-black">
          {title}
        </a>
        <div className="flex justify-between items-center w-[80%]">
          <div className="flex items-center gap-4">
            {imagePerson}
            <a href="" className="text-black">
              {namePerson}
            </a>
          </div>
          <p className="text-md text-black">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
