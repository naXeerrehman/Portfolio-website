import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
const Services = () => {
  const services = [
    {
      name: "UI/UX design",
      description: "lorem ipsum dolor sit amet adipisicing consectetur",
      link: "Learn more",
    },
    {
      name: "Development",
      description: "lorem ipsum dolor sit amet adipisicing consectetur",
      link: "Learn more",
    },
    {
      name: "Digital Marketing",
      description: "lorem ipsum dolor sit amet adipisicing consectetur",
      link: "Learn more",
    },
    {
      name: "Product Branding",
      description: "lorem ipsum dolor sit amet adipisicing consectetur",
      link: "Learn more",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row" id="services">
      {/* text and image */}
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="w-[700px] ml-[200px] lg:ml-[15px]"
      >
        <h1 className="text-accent text-3xl">What I DO</h1>
        <p className="font-secondary text-2xl mb-10 leading-10">
          I'm a freelance frontend developer <br /> with over five years of
          experience.
        </p>
        <button className="btn btn-sm mb-5">See my work</button>
        {/* image */}
        <div className="hidden lg:flex lg:bg-services bg-no-repeat mix-blend-lighten h-[550px] ml-[100px] bg-ml-[100px] relative -mt-[220px]"></div>
      </motion.div>
      {/* services */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mx-5"
      >
        {services.map((service, index) => {
          // destructure services
          const { name, description, link } = service;
          return (
            <div
              className="flex gap-x-[50px] border-b border-white/20 mb-10"
              key={index}
            >
              {/* name, description and link*/}
              <div>
                <h1 className="text-2xl mb-1">{name}</h1>
                <p>{description}</p>
              </div>
              {/* arrow icons and link(learn more) */}
              <div className="flex flex-col justify-center items-center">
                <div className="btn bt-sm rounded-full w-9 h-9 flex items-center justify-center mb-3">
                  <BsArrowUpRight />
                </div>
                <div className="text-gradient text-sm w-[100px]">{link}</div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
