
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/footer/footer'
import Image from 'next/image'



export default function Page() {
  return (
    <div className=" bg-gray-900 text-white">
      <Header />

      {/* Main Title Section */}
      <section className="flex flex-col  justify-center h-screen bg-green-500 text-center  duration-300 ease-in-out hover:bg-green-600">
        <h1  className="text-8xl font-extrabold  drop-shadow-xl animate-bounce">
          HEY, IAM ALI HAMZA
        </h1>
        <span className="text-4xl mt-2">FRONT-END DEVELOPER</span>
      
      </section>


      {/* Divider */}
      <div className="border-t-4 border-green-400 my-10  "></div>


      {/* About Me Section */}
      <section id="about me"  className=" bg-teal-900   text-center border-b-2 border-t-2 h-96" >
        <h2 className="text-6xl font-black mb-4">
          <span className="text-9xl text-green-400">A</span>BOUT <span className="text-white">ME</span>
        </h2>
         
        <p className="text-xl font-medium leading-relaxed mx-auto border-l-4 border-green-400 pl-4 p-7">
          I am <span className="text-1xl text-green-400 font-semibold">Ali Hamza</span>, a new developer who knows HTML, CSS, TypeScript, 
          Nextjs and Tailwind css . Iam still learning and getting better at building websites. Right now, Iam enrolled in a course at Government
           House, where I&apos;m learning more skills to improve my work. I enjoy working on creative projects and love exploring new ways to make my
            websites better and more responsive.
        </p>
      </section>


      <div className="border-t-4 border-green-400 my-10  "></div>

      {/* privous work Section */}
      <section id="project" className="px-6 py-10 bg-teal-900 rounded-lg shadow-2xl text-center border-b-2 border-t-2">
  <h2 className="text-6xl font-black mb-4">
    <span className="text-9xl text-green-400">MY</span>PROJECTS <span className="text-white"></span>
  </h2>
  <div className="border-t-4 border-green-400 my-10"></div>

  <div className="flex flex-wrap justify-between items-start">

    {/* RESUME BUILDER (Left) */}
    <div className="w-full lg:w-1/2 bg-transparent text-center pt-4 px-6">
      <h1 className="text-4xl font-mono font-bold items-center text-green-500">
        <span className="text-8xl">D</span>YNAMIC RESUME BUILDER
      </h1>
      {/* image1 */}
      <div className="max-w-xl hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 pt-3 mt-5 rounded-lg">
        <a>
          <Image src="/img2.jpg" alt="photo" height="300" width="300" className="mx-auto mt-5 shadow-lg bg-transparent hover:bg-teal-800 hover:shadow-lg hover:shadow-green-400 duration-200 rounded-lg" />
        </a>
        {/* para 1*/}
        <p className="text-xl font-medium mt-4 text-white pb-6 px-6">
          This is a dynamic resume builder website where you can fill in your information, and a resume will be generated for you. You can also edit the resume later as needed.<br /><br />
          Here is the link: <a href="https://sparkling-panda-2ec022.netlify.app/" target="_blank" className="text-blue-200 hover:text-green-400">you can try this!</a>
        </p>
      </div>
    </div>

    {/* MUSIC PLAYER (Right) */}
    <div className="w-full lg:w-1/2 bg-transparent text-center pt-4 px-6">
      <h1 className="text-4xl font-mono font-bold text-center text-green-500">
        <span className="text-8xl">MR</span>FOODIE
      </h1>
      {/* img2 */}
      <div className="max-w-xl hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 pt-3 mt-5 rounded-lg">
        <a>
          <Image src="/img4.jpg" alt="photo" height="300" width="300" className="mx-auto mt-5 shadow-lg bg-transparent hover:bg-teal-800 hover:shadow-lg hover:shadow-green-400 duration-200 rounded-lg" />
        </a>
        {/* para 2 */}
        <p className="text-xl font-medium pb-3 mt-4 text-white px-6">
        I created a website named Mr. Foodie to showcase my skills, featuring a menu bar, header, footer, and a hero section with food images. It also includes a fast food menu.


</p>
        <br /> Here is the link: <a href="https://foodie-com-website2.vercel.app/" target="_blank" className="text-blue-200 hover:text-green-400 hover:text-l">you can try this!</a>
      </div>
    </div>

  </div>
</section>
<div className="border-t-4 border-green-400 my-10 border-b-2 "></div>

{/* service */}


<section id="service"  className=" bg-teal-900   text-center border-b-2 border-t-2 h-96" >
        <h2 className="text-6xl font-black mb-4">
          <span className="text-9xl text-green-400">S</span>ERVICE
        </h2>
         
        <p className="text-xl font-medium leading-relaxed mx-auto border-l-4 border-green-400 pl-4 p-7">
        I am a web developer and designer, and I provide these services to help your business grow online. I create websites that look good and work well on all devices. I design logos that match your business style. I make sure your website is easy to find on search engines, and I offer support to keep your website updated and running smoothly.
        </p>

      </section>

  {/* Divider */}
  <div className="border-t-4 border-green-400 my-10 border-b-2 "></div>
<Footer></Footer>
   </div>
  )
}



