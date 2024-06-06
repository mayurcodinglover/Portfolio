import React from "react";
import "./About.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpg";
import profile2 from "../../assets/profile2.jpg";

const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center" id="about">
      <div className="About-me mt-10 w-[90%]">
        <div className="title-1 relative mb-10">
          <h1 className="text-center font-bold text-[2.5rem] z-30 relative md:text-[3.4rem]">
            About me
          </h1>
          <img
            src={theme}
            alt=""
            className="absolute md:top-[-25px] top-[-1px] left-[55%] z-20 md:left-[48%] h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]"
          />
        </div>
        <div className="two-section flex flex-col justify-center items-center">
          <div className="md:w-[80%] w-[70%] m-2 p-2">
            <p className="m-2 p-2  text-center flex flex-col justify-center items-start  leading-9 font-medium md:text-[1rem] text-[12px]">
              Aspiring full-stack developer with a solid foundation in the MERN
              stack (MongoDB, Express, React, Node.js). Experienced in building
              dynamic, responsive web applications and adept at both frontend
              and backend development. Proficient in JavaScript HTML, CSS, and
              RESTful API integration.Seeking an internship to enhance mynp
              technical abilities and contribute to innovative development
              projects.
            </p>
            <div className="right flex flex-col justify-center items-center gap-8 m-2 p-2  top-0">
              <div className="skills-section flex md:flex-row flex-col">
                <div className="left-skill flex flex-col text-[12px] md:text-[1rem]">
                  <div className="skill-hr flex gap-2  p-2 m-1 items-center">
                    <p className="px-2 w-[7rem] ">HTML</p>
                    <hr className="bg-hr md:w-[18rem] w-[13rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2 p-2 m-1 items-center">
                    <p className="px-2  w-[7rem]">CSS</p>
                    <hr className="bg-hr md:w-[17rem] w-[10rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  p-2 m-1 items-center">
                    <p className="px-2 w-[7rem]">Javascript</p>
                    <hr className="bg-hr md:w-[16rem] w-[11rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  p-2 m-1 items-center">
                    <p className="px-2 w-[7rem]">Bootstrap</p>
                    <hr className="bg-hr md:w-[18rem] w-[8rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  p-2 m-1 items-center">
                    <p className="px-2 w-[7rem]">React</p>
                    <hr className="bg-hr md:w-[15rem] w-[12rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  p-2 m-1 items-center">
                    <p className="px-2 w-[7rem]">Tailwind Css</p>
                    <hr className="bg-hr md:w-[13rem] w-[13rem] h-[5px] rounded-[2rem]" />
                  </div>
                </div>
                <div className="right-skill flex flex-col justify-center text-[12px] md:text-[1rem]">
                  <div className="skill-hr flex gap-2 items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">Node js</p>
                    <hr className="bg-hr md:w-[18rem] w-[10rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2 items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">MongoDB</p>
                    <hr className="bg-hr md:w-[16rem] w-[10rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2 items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">SQL</p>
                    <hr className="bg-hr md:w-[18rem] w-[13rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">Oracle</p>
                    <hr className="bg-hr md:w-[15rem] w-[9rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">Express</p>
                    <hr className="bg-hr md:w-[18rem] w-[13rem] h-[5px] rounded-[2rem]" />
                  </div>
                  <div className="skill-hr flex gap-2  items-center p-2 m-1">
                    <p className="px-2 w-[7rem]">Git and Github</p>
                    <hr className="bg-hr md:w-[18rem] w-[10rem] h-[5px] rounded-[2rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
