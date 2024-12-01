

import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (




    
    <div className="h-[54px] bg-[#F7F7F7] hidden sm:flex justify-between px-6 py-4 gap-8 lg:px-10">
      {/* Contact Information */}
      <div className="text-sm flex gap-8 flex-wrap w-full sm:w-auto text-center lg:text-left text-black">
        <p>
          Phone Number: <span className="font-medium">956 742 455 678</span>
        </p>
        <p>
          Email: <span className="font-serif">info@ddsgnr.com</span>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 lg:gap-8 items-center justify-center lg:justify-end text-black">
        
        <a href="/" target="_blank" >
          <FaFacebook size={20} /></a>

        <a href="/" target="_blank" >
          <FaInstagram size={20} /></a>

        <a href="/" target="_blank" >
          <FaTwitter size={20} /></a>

        <a href="/" target="_blank" >
          <FaLinkedin size={20} /></a>
      </div>





    </div>
  )
}












