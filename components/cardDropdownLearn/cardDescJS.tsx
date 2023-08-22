const CardDescJS = ({
  title,
  desc1,
  desc2,
  desc3,
}: {
  title: string;
  desc1: string;
  desc2: string;
  desc3: string;
}) => {
  return (
    <>
      <div className="flex flex-col bg-[#0A0A23] p-4 gap-4">
        <div className="flex text-2xl">{title}</div>
        <div className="flex text-xl">{desc1}</div>
        <div className="flex text-xl">{desc2}</div>
        <div className="flex text-xl">{desc3}</div>
      </div>
    </>
  );
};

export default CardDescJS;
