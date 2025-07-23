"use client";
import React, { useEffect, useRef,useState } from 'react'
import Image from 'next/image'
import { assets } from '../assets/assets'

const NavBar = () => {
  const[isScroll,setScroll]=useState(false)
  const sideMenuRef=useRef(false)
  const openMenu=()=>{
    sideMenuRef.current.style.transform = 'translate(-16rem)'
  }
  const closeMenu=()=>{
    sideMenuRef.current.style.transform = 'translate(16rem)'
  }
  useEffect(()=>{
       window.addEventListener('scroll',()=>{
            if(scrollY>50){
              setScroll(true)
            }else{
 setScroll(false)
            }
       })
       console.log(scroll)
  },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt="" className='w-full '/>
    </div>
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""} `}>
      <h1 className='text-3xl  mr-14'>Anushka Rangari</h1>
      <ul className={`hidden md:flex md:text-lg items-center  justify-between gap-6 lg:gap-8 rounded-full px-12 py-3 "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
      <li><a href="#top" className=' capitalize font-ovo'>Home</a></li>
       <li><a href="#about" className=' capitalize'>About</a></li>
        <li><a href="#work" className=' capitalize'>Experience</a></li>
         <li><a href="#project" className=' capitalize'>projects</a></li>
          <li><a href="#contact" className=' capitalize'>contact</a></li>
    </ul>
    <div className=' flex items-center gap-4 '>
      
      <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact</a>
      <button  className='block md:hidden ml-3' onClick={openMenu}><Image src={assets.menu_black} alt="" className='w-6 cursor-pointer'/></button>
    </div>
    {/* mobile menu */}
    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 '>
      <div className='absolute right-6 top-6' onClick={closeMenu}>
        <Image  src={assets.close_black} alt="" className='w-5 cursor-pointer ' />
      </div>
      <li onClick={closeMenu}><a href="#top" className=' capitalize font-ovo'>Home</a></li>
       <li onClick={closeMenu}><a href="#about" className=' capitalize'>About</a></li>
        <li onClick={closeMenu}><a href="#work" className=' capitalize'>Experience</a></li>
         <li onClick={closeMenu}><a href="#project" className=' capitalize'>projects</a></li>
          <li onClick={closeMenu}><a href="#contact" className=' capitalize'>contact</a></li>
    </ul>
    </nav>
    </>
  )
}

export default NavBar