import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="bg-gradient-to-bl to-gray-900 from-zinc-900 p-3 mt-4 text-white text-center border-t-2">
      <h1 className="text-lg font-bold pt-5">
        &copy; 2024 || A Creation By Ali Hamza
      </h1>
      <p className="text-sm mt-1 mb-20">
        Developing the future, one website at a time.
      </p>
       <section id='overview' className="text-left border-t-2">
        <h2 className="text-4xl font-black mb-4 pl-5 pb-2">
          <span className="text-9xl text-green-400">A</span>BOUT <span className="text-white">US</span>
        </h2>
        <p className="text-xl font-medium  mx-auto border-l-4 border-green-400 p-3">
          Welcome to my <span className='text-1xl text-green-400 font-semibold'>PORTFOLIO</span> website! This platform showcases my skills and projects as a developer.<br/> Here, you will find a collection of my work, including web development projects and design creations, <br/>highlighting my journey and expertise in the field.
        </p>
       
    
      </section>
<section>
  <h1 className='text-green-400 text-3xl font-black   text-right mr-10 mt-36'>FOR CONTACT</h1>
  <p className='text-lg text-right m-7'>  If you have any questions, feel free to contact me.<br/> Iam always open to work and new ideas. You can email me at: 
  </p> 
  
  
  <h1 className='pr-7 text-lg mt-2  font-thin text-end'>
  hamza.nadeem.0106@gmail.com 
  </h1>
  
</section> 
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4 border-dashed">
        Powered by Ali Hamza | All rights reserved.
        {/* LinkedIn Section with separate "Connect with me" text */}
        <div className="flex justify-start mt-2">
          <span className="text-white font-medium mr-2">Connect with me</span>
          <a href='https://www.linkedin.com/in/ali-hamza-nadeem-479b42292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="hover:text-blue-500">
            <FaLinkedin className='text-blue-700 size-8 hover:text-blue-500 duration-75 hover:size-10' />
          </a>
        </div>
      </div>
    </div>
  );
}
