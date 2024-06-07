import React from "react";
import Projectitem from "./Projectitem";
import Project1 from "../public/todolist.png";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#660066]">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projectitem
            title="To-Do List"
            backgroundImg={Project1}
            projectUrl="./todolist"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
