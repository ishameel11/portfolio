import Image from "next/image";
import React from "react";
import Skill1 from "../public/css.png";
import Skill2 from "../public/javascript.png";
import Skill3 from "../public/html.png";
import Skill4 from "../public/github1.png";
import Skill5 from "../public/react.png";
import Skill6 from "../public/tailwind.png";
import Skill7 from "../public/redux.png";
import Skill8 from "../public/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#660066]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill1} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill2} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill3} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill4} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill5} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill6} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill7} width={64} height={64} alt="/" />
          </div>
          <div className="p-6 flex justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <Image src={Skill8} width={64} height={64} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
