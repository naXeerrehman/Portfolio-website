import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-10">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-1 mb-1 lg:mb-0  text-center lg:text-left"
        >
          {/* text */}
          <div className="mb-3">
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              work.
            </h2>
            <p className="max-w-sm mb-10 ml-[100px] lg:ml-0">
              lorem ipsum dolor sit amit lorem ipsum dolor sit amit lorem ipsum
              dolor sit amit
            </p>
            <button className="btn btn-sm">View all projects</button>
          </div>
          {/* image 1 */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-0 -top-2">
         {/* overlay */}
         <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
           {/* img */}
           <img
                className="group-hover:scale-125 transition-all duration-500 h-[235px]"
                src={Img1}
                alt=""
              />
           {/* pretitle */}
           <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 text-3xl text-white">
                UI/UX Designer
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 text-3xl text-white">
                Project Title
              </div> 
         </div>
        </motion.div>
        {/* right side images  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-7 h-[500px]"
        >
          {/* image 2 */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={Img2}
              alt=""
            />
            {/* pretitle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 text-3xl text-white">
              UI/UX Designer
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 text-3xl text-white">
              Project Title
            </div>
          </div>
          {/* image 3 */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500 "
              src={Img3}
              alt=""
              />
            {/* pretitle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 text-3xl text-white">
              UI/UX Designer
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50 text-3xl text-white">
              Project Title
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;