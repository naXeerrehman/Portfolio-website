import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Contact = () => {
  return (
    <section className='section flex flex-col lg:flex-row mb-10 justify-between mx-10' id='contact'>
      {/* text */}
      <motion.div
      variants={fadeIn("right",0.3)}
      initial={"hidden"}
    whileInView={"show"}
viewPort={{once:false,amount:0.3}}
      >
        <h1 className='text-accent uppercase font-semibold'>Get In touch</h1>
        <h1 className='text-[45px] lg:text-[90px] leading-none'>Let's work <br/> together!</h1>
      </motion.div>
     {/* form */}
      <motion.form
         variants={fadeIn("left",0.3)}
         initial={"hidden"}
       whileInView={"show"}
   viewPort={{once:false,amount:0.3}}
      className='mt-10 border rounded-xl flex flex-col gap-y-10 pt-10'>
<input className='w-[500px] outline-none bg-transparent border-b border-white placeholder-white mx-3 py-3 focus:border-accent' placeholder='Your name*'/>
<input className='w-[500px] outline-none bg-transparent border-b border-white placeholder-white mx-3 py-3 focus:border-accent' placeholder='Your email*'/>
<input className='w-[500px] outline-none bg-transparent border-b border-white placeholder-white mx-3  mb-5 pb-20 focus:border-accent' placeholder='Your message*'/>
     <button className='btn btn-sm w-[170px] mb-3 mx-5'>Send message</button>
      </motion.form>
    </section>
  )
}

export default Contact