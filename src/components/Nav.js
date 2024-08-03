import React from "react";
// import icons
import { BiHomeAlt,  BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
// import link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="">
        {/* nav  */}
        <nav className="bg-black/20 h-[46px] backdrop-blur-2xl rounded-full max-w-[460px]  px-5 flex justify-between items-center text-2xl text-white/50 fixed bottom-3 lg:bottom-3 w-full z-50 ml-[80px] lg:ml-[370px]">
          {/* home */}
          <Link to='home' 
          // activeClass='active'
          smooth={true}
          spy={true}
           className="cursor-pointer w-[50px] h-[40px] flex items-center justify-center"
            // offSet={-200}
            >
            <BiHomeAlt />
          </Link>
          {/* about */}
          <Link to='about' 
          // activeClass="active"
          smooth={true}
          spy={true} 
          className="cursor-pointer w-[50px] h-[40px] flex items-center justify-center">
            <BiUser />
          </Link>
          {/* clipboard */}
          <Link to='services' 
          // activeClass="active"
          smooth={true}
          spy={true} className="cursor-pointer w-[50px] h-[40px] flex items-center justify-center">
            <BsClipboardData />
          </Link>
          {/* breifcase */}
          <Link to='work' 
          activeClass="active"
          smooth={true}
          spy={true} className="cursor-pointer w-[50px] h-[40px] flex items-center justify-center">
            <BsBriefcase />
          </Link>
          {/* chatsquare */}
          <Link to='contact' 
          activeClass="active"
          smooth={true}
          spy={true} className="cursor-pointer w-[50px] h-[40px] flex items-center justify-center">
            <BsChatSquareText />
          </Link>
        </nav>
    </div>
  );
};
export default Nav;
