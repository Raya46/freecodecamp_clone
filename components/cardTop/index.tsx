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
        <div className="flex w-full">
          <div className="flex w-full flex-col ml-4 ">
            <p>{title}</p>
            <p>{tag}</p>
          </div>
          <div className="w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="none"
                className="w-8 h-8 border"
              />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col justify-center items-center"></div>
        <div className="flex w-1/2 items-center justify-center">
          <p className="w-full">{replies.toString()} </p>
          <p className="w-full">{views.toString()}</p>
          <p className="w-full">{activity}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTop;
