import React from 'react'
import profile from '../../assets/profile.jpg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (  
    <div className='flex justify-center items-center' id='hero'>
      <div className='hero flex flex-col justify-center items-center w-[50%]'>
        <img src={profile} alt="" className='hero-img h-[12rem] w-[12rem] rounded-[50%] m-4 p-4'/>
        <div className="title font-bold text-[2rem] text-center mb-5 md:text-[3rem]">
            <p><span className='intro'>I'm Mayur Hedau,</span>fullstack developer based in INDIA.</p>
        </div>
        <div className="description font-bold text-center w-[100%] mb-[2rem] text-[12px] md:w-[80%] md:text-[1rem]">
            <p>Aspiring full-stack developer with a strong foundation in JavaScript, HTML, CSS, and React, coupled with backend experience in Node.js and Express.</p>
        </div>
        <div className="buttons w-[30rem] flex justify-center items-center md:w-[100%]">
           <AnchorLink className="ancor-link" offset={50} href="#contact" > <button className="connect-with-me background-color m-2 p-3 rounded-[30px] px-6 hover:border-2 border-white border-solid text-[12px] md:text-[1rem]">Contact with me</button></AnchorLink>
            <button className="resume  m-2 p-3 rounded-[30px] px-10 border-white border-solid border-2 hover:border-2 hover:border-[#B415FF] hover:border-solid  text-[12px] md:text-[1rem]">My resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
