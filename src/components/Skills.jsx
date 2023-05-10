import React from "react";
import {
  CPP,
  Linux,
  HTML,
  CSS,
  JavaScript,
  ReactImg,
  Node,
  GitHub,
  Tailwind,
} from "../assets";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen color-background color-text">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-primary color-Heading">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient ">
            <img className="w-20 mx-auto" src={CPP} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient">
            <img className="w-20 mx-auto" src={Linux} alt="Node icon" />
            <p className="my-4">Linux</p>
          </div>
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#1a233d] hover:scale-110 duration-500 bg-blue-gradient">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
