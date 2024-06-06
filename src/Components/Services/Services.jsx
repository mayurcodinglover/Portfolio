import React from "react";
import "./Services.css";
import theme from "../../assets/theme_pattern.svg";
import arrow from "../../assets/arrow_icon.svg";
import data from "../../assets/data";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="services">
      <div className="services mt-10 w-[80%]">
        <div className="title-1 relative mb-[5rem] md:mb-20">
          <h1 className="text-center font-bold text-[2.5rem] md:text-[3.4rem] z-30 relative">
            My Services
          </h1>
          <img
            src={theme}
            alt=""
            className="absolute md:top-[-25px] top-[-1px] left-[55%] z-20 md:left-[50%] h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]"
          />
        </div>
        <div className="Services flex justify-center md:flex-row flex-col items-center gap-5">
          {data.map((item, index) => {
            return (
              <div className="service md:w-[30%] md:h-[20rem] w-[60%] h-[15rem] m-2 p-10  border-2 border-solid border-white flex flex-col justify-center items-start font-bold text-[1rem] gap-5 rounded-lg">
                <p className="md:text-[20px] text-[15px]">{item.id}</p>
                <h2 className="md:text-[28px] title text-[20px]" >{item.title}</h2>
                <p className="md:w-[70%] text-[12px]">
                  {item.description}
                </p>
                <div className="readmore flex justify-center items-start md:gap-3 gap-2 text-[10px] md:text-[1rem]">
                  <p>Read More</p>
                  <img src={arrow} alt="" className="md:h-[25px] md:w-[25px] h-[15px] w-[15px]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
