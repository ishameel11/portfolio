import React from "react";
import Project1 from "../public/todolist.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
}

const Projectitem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  projectUrl,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#660066]">
      <Image
        className="rounded-xl group-hover:opacity-10 group-hover:bg-[#660066]"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">HTML CSS JS</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projectitem;
