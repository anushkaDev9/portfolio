import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-20'>
       <div className='text-center '>
         <p className='text-3xl mb-3  '>Anushka Rangari</p>
         <div className='w-max flex items-center gap-2 mx-auto mb-5'>
            <Image src={assets.mail_icon} alt="" className="w-6"/>
             <h4 className='text-center mb-0 text-md  '>anushkanil1@gmail.com</h4>
         </div>
        <div className='text-center text-gray-600 border-t border-t-gray-300 py-4 '>
            <p>@2025 Anushka Rangari.All rigits reserved</p>
        </div>
       </div>
    </div>
  )
}

export default Footer