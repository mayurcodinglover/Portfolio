import React from "react";
import "./Mywork.css";
import theme from "../../assets/theme_pattern.svg";
import workdata from '../../assets/workdata';

const Mywork = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="work">
      <div className="myworks mt-10 w-[80%]">
        <div className="title-1 relative mb-20">
          <h1 className="text-center font-bold text-[2.5rem] md:text-[3.4rem] z-30 relative">
            My Works
          </h1>
          <img
            src={theme}
            alt=""
            className="absolute md:top-[-25px] top-[-1px] left-[55%] z-20 md:left-[50%] h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]"
          />
        </div>
        <div className="works-image grid grid-cols-2 gap-3">
            {workdata.map((data,index)=>
            {
                return (<div className="parent-img m-2 p-2 rounded-[1rem]">
                <a href={data.gitlink}><img src={data.image} className="imgage-work h-auto w-auto rounded-[1rem] object-cover">
                </img></a>
                </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};
export default Mywork;