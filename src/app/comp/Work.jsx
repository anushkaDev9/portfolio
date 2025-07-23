'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { assets, workData } from '../assets/assets'
const Work = () => {
  return (
     <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1}}
     
     className='w-full px-[12%] py-30 scroll-mt-20' id="work">
  <motion.h2 
  initial={{y:-20,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{delay:0.3,duration:0.5}}
  className='text-center text-5xl mb-20 font-bold'>Experience</motion.h2>

  <motion.div 
  initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.6,delay:0.7}}
  className='grid gap-8 max-w-6xl mx-auto cursor-pointer sm:grid-cols-1 md:grid-cols-2'>
    {workData.map(({ id, role, company, date, description }) => (
      <motion.div
    
     whileHover={{scale:1.05}}
    
        key={id}
        className='border border-gray-400 p-6 rounded-xl shadow-sm cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff]'
      >
        <h3 className='text-lg font-semibold text-gray-800'>{role}</h3>
        <p className='text-gray-600 text-sm mb-1 font-bold'>{company}</p>
        <p className='text-gray-500 text-sm mb-4 italic'>{date}</p>
        <p className='text-sm text-gray-700'>{description}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

  )
}

export default Work