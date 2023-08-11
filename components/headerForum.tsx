import Link from "next/link";
import Image from "next/image";
import personForum from "@/assets/personforum.jpg";
const HeaderForum = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <div className="flex border-2 gap-3 items-center p-1 px-2">
          <p>All Subforums</p>
          <p> {">"} </p>
        </div>
        <Link href="/forum" className="hover:bg-[#DDDEE0] hover:text-black">
          <div className="flex border-2 items-center p-1 px-2">
            <p>Subforums</p>
          </div>
        </Link>
        <Link href="/latest" className="hover:bg-[#DDDEE0] hover:text-black">
          <div className="flex border-2 items-center p-1 px-2">
            <p>Latest</p>
          </div>
        </Link>

        <Link href="/top" className="hover:bg-[#DDDEE0] hover:text-black">
          <div className="flex border-2 items-center p-1 px-2">
            <p>Top</p>
          </div>
        </Link>

        <Link
          href="/leaderboard"
          className="hover:bg-[#DDDEE0] hover:text-black"
        >
          <div className="flex border-2 items-center p-1 px-2">
            <p>Leaderboard</p>
          </div>
        </Link>
      </div>
      <div className="flex mt-4 w-full">
        <p className="mr-4">Online (66): </p>
        <div className="flex">
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <Image src={personForum} alt="none" className="-ml-3" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderForum;
