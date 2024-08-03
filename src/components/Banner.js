import React from "react";
// images
import Image from "../assets/avatar.svg";
// icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="p-5 text-center mt-1" id="home">
      <div className="flex justify-between items-center">
        <div>
          <motion.h1 
           variants={fadeIn('up',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className="font-semibold text-8xl">BEN AIDEN</motion.h1>
          <motion.div 
           variants={fadeIn('up',0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className="font-semibold text-5xl uppercase">
            <span>I am a </span>
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000, "Youtuber", 2000]}
              speed={50}
              repeat={Infinity}
              className="text-accent"
              wrapper="span"
            />
          </motion.div>
          <motion.p
           variants={fadeIn('up',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          >
            Lorem ipsum dolor sit amet consectetur adispicising Lorem ipsum
            dolor
          </motion.p>
          <motion.div
           variants={fadeIn('up',0.6)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className="flex items-center gap-x-3 mx-32 mt-5">
            <button className="btn btn-sm">Contact Me</button>
            <div className="text-gradient">My Portfolio</div>
          </motion.div>
          <motion.div 
           variants={fadeIn('up',0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false,amount:0.7}}
          className="flex gap-x-5 mx-[200px] mt-7 hover:cursor-pointer">
            <FaGithub/>
           <FaDribbble/>
         <FaYoutube/>         
          </motion.div>
        </div>
        <motion.div 
         variants={fadeIn('down',0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}
        className="hidden lg:flex mr-10"><img src={Image} width={'400px'}/></motion.div>
      </div>
    </section>
  );
};

export default Banner;