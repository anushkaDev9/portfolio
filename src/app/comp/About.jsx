'use client'
import React from 'react'
import { assets, infoList } from '../assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full px-[12%] scroll-mt-20'
      id="about"
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg '
      >
        Introduction
      </motion.h4>
   
        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        
        className='text-center text-5xl'>About me
        </motion.h2>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 justify-center px-4'>
    <motion.div 
    initial={{ scale: 0, opacity:0}}
        whileInView={{ opacity: 1,scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
    className='w-64 sm:w-80 rounded-3xl'>
    <Image src={assets.profile} alt="" className='w-full rounded-3xl' />
  </motion.div>
  <motion.div 
   initial={{ scale: 0, opacity:0.9}}
        whileInView={{ opacity: 1,scale: 1 }}
        transition={{ duration: 0.6 }}
  className='flex-1 max-w-2xl text-center lg:text-left'>
    <p className='mb-10'>
      Passionate and adaptable frontend web developer with a strong foundation in responsive design and modern JavaScript frameworks. Collaborative by nature, I thrive in team environments and am always eager to learn. I’m driven by a desire to create seamless user experiences and clean, scalable code. Currently expanding my skillset in full-stack development to deliver complete, high-quality web applications.
    </p>
    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
  {infoList.map(({ icon, iconDark, title, description }, index) => (
    <li
      key={index}
      className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:bg-[#fcf4ff]'
    >
      <Image src={icon} alt={title} className='w-7 mt-3' />
      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>

      {Array.isArray(description) ? (
        typeof description[0] === 'string' ? (
          <ul className='list-disc pl-5 text-gray-600 text-sm'>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : title === 'Education' ? (
          <ul className=' text-sm space-y-2'>
            {description.map((edu, i) => (
              <li key={i}>
                <p className='text-gray-800 font-bold'>{edu.degree}</p>
                <p className='text-gray-600'>{edu.college}</p>
                <p className='text-gray-600 italic'>{edu.year}</p>
              </li>
            ))}
          </ul>
        ) : title === 'Links' ? (
          <ul className='text-gray-600 text-sm space-y-2'>
            {description.map((link, i) => (
              <li key={i}>
                {link.github && (
                  <a
                    href={link.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline'
                  >
                    GitHub
                  </a>
                )}
                {link.linkedln && (
                  <a
                    href={link.linkedln}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline '
                  >
                    LinkedIn
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : null
      ) : (
        <p className='text-gray-600 text-sm'>{description}</p>
      )}
    </li>
  ))}
</ul>


    
  </motion.div>
</motion.div>

    </motion.div>
  )
}

export default About