import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { Image } from "../assets/about.png";

const About = () => {
  return (
    <section
      className="lg:flex justify-between items-center w-[1200px] mx-10 mb-[100px]"
      id="about"
    >
      {/* image */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex flex-col bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten mx-[100px]"
      ></motion.div>
      {/* text */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-y-8"
      >
        <h2 className="h2 text-accent">About Me</h2>
        <h2 className="h3 font-semibold mb-0">
          I'm a frontend developer <br />
          with over 5 years of experience.
        </h2>
        <p>
          Lorem ipsum dolor amet sit adipicising consectetur <br />
          Lorem ipsum dolor amet sit
        </p>
        <div className="flex gap-x-10 ">
          <div>
            <div className="text-gradient text-4xl">
              <CountUp start={0} end={15} duration={5} />
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Years of <br />
              experience{" "}
            </div>
          </div>

          <div>
            <div className="text-gradient text-4xl">
              <CountUp start={0} end={15} duration={5} />
              k+
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Projects <br />
              Completed{" "}
            </div>
          </div>

          <div>
            <div className="text-gradient text-4xl">
              <CountUp start={0} end={12} duration={5} />
              k+
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Satisfied <br />
              clients{" "}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
