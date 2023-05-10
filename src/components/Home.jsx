import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen color-background">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className=" text-[#7aa1c5]">Hi, my name is</p>

        <h1 className="text-4xl sm:text-7xl font-bold text-[#f4f9fa]">
          Camron Walsh
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#c7c7c7]">
          I'm a computer science student.
        </h2>

        <p className="text-[#f4f9fa] py-4 max-w[700px]">
          i'm a computer science student at SUNY Fredonia with a passion for
          audio applications. Currently, I'm working on building audio vst's
        </p>
        <div className=" max-w-[170px] ">
          <Link to="work" smooth={true} duration={500}>
            <button
              className="z-10 group hover:translate-x-5 duration-300 text-white border-2 px-6 py-3 my-2 flex 
              items-center hover:bg-[#7aa1c5] hover:border-[#7aa1c5]"
            >
              View Work
              <span className=" group-hover:animate-pulse ">
                <HiArrowNarrowDown className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <div className="absolute z-10 w-[30%] h-[30%] top-0 right-0 blue__gradient" />
        <div className="absolute z-10 w-[40%] h-[30%] top-0 right-0 pink__gradient" />
      </div>
    </div>
  );
};

export default Home;
