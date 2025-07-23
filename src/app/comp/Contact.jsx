'use client'
import React  from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c71c71a-189d-4975-926f-314881584f6d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div 
    initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1}}
    className='w-full px-[12%] scroll-mt-20' id="contact">
       <h4 className='text-center mb-2 text-lg '>Get in touch</h4>
        <h2 className='text-center text-5xl'>Contact with me</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600'>
            I'd love to hear from you! If you have any question,comments or feedback please use the form below.
        </p>
        <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Enter your name' name='name' required className='flex-1  rounded-sm p-3 outline-none border-[0.5px] bg-white border-gray-400'/>
                 <input type='email' placeholder='Enter your email'  name='email' required className='flex-1  rounded-sm p-3 outline-none border-[0.5px] bg-white border-gray-400'/>
            </div>
            <textarea rows='6' placeholder='Enter your messsage' required  name='message' className='w-full rounded-sm p-3 outline-none border-[0.5px] bg-white border-gray-400'></textarea>
            <button className='px-8 py-5 flex items-center justify-between gap-2  bg-black text-white rounded-full mx-auto cursor-pointer'>
                Send Message
                </button>
        </form>
        <p className='mt-4'>{result}</p>
        </motion.div>
  )
}

export default Contact