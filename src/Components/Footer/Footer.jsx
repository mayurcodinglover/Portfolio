import React, { Profiler } from "react";
import "./Footer.css";
import theme from "../../assets/theme_pattern.svg";
import prifile from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="contact mt-20 w-[80%]">
        <div className="two-section flex justify-center items-start md:flex-row flex-col">
          <div className="left flex flex-col justify-center items-start w-[50%] m-2 p-2">
              <h1 className="font-bold text-[2rem] z-30">Mayur</h1>
            <p className="w-[20rem] text-[13px] font-bold
            ">I am a full stack developer and i know mern stack and i have done many projects in there currently i am seeking for an internship opportunity.</p>
          </div>
          <div className="right md:w-[50%] w-[100%] flex justify-center items-center">
            <div className="email-footer flex justify-center items-start gap-4 m-2 p-2 border-2 border-solid border-white rounded-xl w-[60%] md:w-[80%] h-[3.5rem] md:h-full">
                <img src={prifile} alt="" className="m-1 p-1 md:h-[30px] md:w-[30px]"/>
                <input type="email" name="" id="" placeholder="Enter your email" className="m-1 p-1 bg-transparent outline-none text-[12px] md:w-full md:text-[1rem]"/>
            </div>
            <button className="background-color m-2 p-3 rounded-[30px] px-6 transform transition-all hover:scale-110 text-[12px] md:text-[1rem]">Subscribe</button>
          </div>
        </div>
        <hr className="m-2 p-2"/>
        <div className="last-section m-2 p-2 flex justify-between items-start md:flex-row flex-col gap-3">
            
            <div className="links flex justify-center items-center gap-4 w-[20rem] text-[13px] font-bold cursor-pointer">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
            <div className="p">
                <p className="w-[20rem] text-[13px] font-bold">© 2024 Mayur Hedau. All rights reserved</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
