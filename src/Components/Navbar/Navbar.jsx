import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import openMenu from '../../assets/menu_open.svg';
import closeMenu from '../../assets/menu_close.svg';

const Navbar = () => {
  const [click, setClick] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-div md:w-auto">
     <div className="navbar flex items-center m-2 p-2 bg-blueviolet md:justify-start" style={{ justifyContent: 'space-between' }}>
        <p className="text-3xl font-bold">MaYuR</p>
        <img src={openMenu} alt="open menu" className="open md:hidden" onClick={handleMenuToggle} />
        <img src={closeMenu} alt="close menu" className={`close ${menuOpen ? "block" : "hidden"} md:hidden`} onClick={handleMenuToggle} />
        <ul className={`ul-list ${menuOpen ? "right-0" : "right-[-300px]"} flex flex-col md:flex-row justify-start items-start md:items-center gap-10`}>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <AnchorLink className="ancor-link" href="#hero"><p onClick={() => setClick("Home")}>Home</p></AnchorLink>
            {click === "Home" && <img className="m-auto flex" src={underline} alt="underline" />}
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <AnchorLink className="ancor-link" href="#about"><p onClick={() => setClick("About me")}>About me</p></AnchorLink>
            {click === "About me" && <img className="m-auto flex" src={underline} alt="underline" />}
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <AnchorLink className="ancor-link" href="#services"><p onClick={() => setClick("Services")}>Services</p></AnchorLink>
            {click === "Services" && <img className="m-auto flex" src={underline} alt="underline" />}
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <AnchorLink className="ancor-link" href="#work"><p onClick={() => setClick("Portfolio")}>Portfolio</p></AnchorLink>
            {click === "Portfolio" && <img className="m-auto flex" src={underline} alt="underline" />}
          </li>
          <li className="cursor-pointer flex flex-col justify-center items-center">
            <AnchorLink className="ancor-link" href="#contact"><p onClick={() => setClick("Contact")}>Contact</p></AnchorLink>
            {click === "Contact" && <img className="m-auto flex" src={underline} alt="underline" />}
          </li>
        </ul>
        <button className="background-color m-2 p-3 rounded-[30px] px-6 transform transition-all hover:scale-110 contact-btn hidden md:block">
          <AnchorLink className="ancor-link" href="#contact">Contact With Me</AnchorLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
