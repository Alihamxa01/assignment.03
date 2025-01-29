import React from 'react'
export default function Header() {
  return (
    <div className="bg-gray-800 p-3  border-b-8 border-green-900">
<h1 className="bg-gradient-to-r from-green-400 to-teal-700 p-4 text-sm sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white text-center border-4 border-white rounded-lg shadow-xl hover:border-teal-100">
Crafting Modern Digital Experiences        
      </h1>
      <div>
        <nav className='text-center mt-5  text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl  '>
          <a href='#overview' className='hover:text-green-300 font-bold p-5  hover:text-lg duration-75'>OVERVIEW</a>
          <a href='#project' className='hover:text-green-300 font-bold  p-5 hover:text-lg duration-75'>PROJECTS</a>
          <a href='#about me' className='hover:text-green-300 font-bold  p-5 hover:text-lg duration-75'>ABOUT ME</a>
          <a href='#service' className='hover:text-green-300 font-bold  p-5 hover:text-lg duration-75'>SERVICES</a>
        </nav>
      </div>
    </div>
  )
}
