'use client'
import React from 'react'
import { projects } from '../assets/assets'
import { motion } from 'framer-motion'
const Project = () => {
  return (
    <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1}} className='w-full px-[12%] py-30 scroll-mt-20' id="project">
  <motion.h2 
  initial={{y:-20,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{delay:0.3,duration:0.5}}
  className='text-center text-5xl mb-20 font-bold'>Projects</motion.h2>

  <motion.div 
  
   initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.6,delay:0.7}}
  className='grid gap-8 max-w-6xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {projects.map(({ id, name, description, stack, githuLink, livelink }) => (
      <motion.div
       whileHover={{scale:1.05}}
        key={id}
        className='border border-gray-300 p-6 rounded-xl shadow-sm hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff]'
      >
        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{name}</h3>

        <p className='text-sm text-gray-700 mb-4'>{description}</p>

        <ul className='list-disc pl-5 text-sm text-gray-600 mb-4'>
          {stack[0]
            .split(',')
            .filter(Boolean)
            .map((tech, index) => (
              <li key={index}>{tech.trim()}</li>
            ))}
        </ul>

        <div className='flex flex-wrap gap-4 mt-2'>
          {githuLink && (
            <a
              href={githuLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-blue-600 underline hover:text-blue-800'
            >
              GitHub
            </a>
          )}
          {livelink && (
            <a
              href={livelink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm text-green-600 underline hover:text-green-800'
            >
               Site
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>


  )
}

export default Project