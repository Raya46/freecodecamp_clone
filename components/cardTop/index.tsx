import Image, { StaticImageData } from "next/image";

const CardTop = ({
  title,
  tag,
  images,
  replies,
  views,
  activity,
}: {
  title: string;
  tag: string;
  images: StaticImageData[];
  replies: Number;
  views: Number;
  activity: string;
}) => {
  return (
    <div className="flex w-full flex-col border-t-gray-600 border-t-2">
      <div className="flex w-full justify-between py-4">
        <div className="flex w-full justify-between">
          <div className="flex w-full flex-col ml-4 ">
            <p>{title}</p>
            <p className="bg-red-400 text-black max-w-fit px-1">{tag}</p>
          </div>
          <div className="flex w-full items-center justify-end mr-10 gap-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="none"
                className="w-6 h-6 border"
              />
            ))}
          </div>
        </div>
        <div className="flex w-1/4 items-center justify-center ">
          <p className="w-full text-[#F77816] ml-4">{replies.toString()} </p>
          <p className="w-full text-[#CF7721] text-left">{views.toString()}k</p>
          <p className="w-full">{activity}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTop;
