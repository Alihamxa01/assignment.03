import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="flex flex-col justify-center min-h-screen bg-green-500 text-center transition-colors duration-300 ease-in-out hover:bg-green-600 px-4 py-16">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold drop-shadow-xl animate-bounce">
          HEY, IaM ALI HAMZA
        </h1>
        <span className="text-2xl md:text-3xl lg:text-4xl mt-4">FRONT-END DEVELOPER</span>
      </section>

      <div className="border-t-4 border-green-400 mx-4 my-8 lg:my-10" />

      {/* About Me Section */}
      <section id="about-me" className="bg-teal-900 text-center border-y-2 px-4 py-12 md:py-16 lg:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
          <span className="text-6xl md:text-7xl lg:text-9xl text-green-400">A</span>BOUT <span className="text-white">ME</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium leading-relaxed border-l-4 border-green-400 pl-4 p-7">
            Im <span className="text-green-400 font-semibold">Ali Hamza</span>, a new developer who knows HTML, CSS, TypeScript, 
            Nextjs and Tailwind css. Im still learning and getting better at building websites. Right now, Im enrolled in a course at Government
            House, where Im learning more skills to improve my work. I enjoy working on creative projects and love exploring new ways to make my
            websites better and more responsive.
          </p>
        </div>
      </section>

      <div className="border-t-4 border-green-400 mx-4 my-8 lg:my-10" />

      {/* Projects Section */}
      <section id="project" className="px-4 md:px-6 py-10 bg-teal-900 text-center border-y-2">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
          <span className="text-3xl sm:text-6xl md:text-7xl lg:text-9xl text-green-400">MY</span>PROJECTS
          
        </h2>
        
        <div className="border-t-4 border-green-400 my-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Project 1 */}
          <div className="bg-transparent text-center pt-4">
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-green-500 mb-6">
              <span className="text-6xl md:text-8xl block md:inline">D</span>YNAMIC RESUME BUILDER
            </h3>
            
            <div className="group hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 rounded-lg p-4">
              <div className="relative  mb-4">
                <Image 
                  src="/img2.jpg" 
                  alt="Resume Builder image" 
                width={650}
                height={800}
                  className="rounded-lg shadow-lg group-hover:shadow-green-400 duration-200"
                />
              </div>
              
              <p className="text-lg md:text-xl font-medium mt-4">
                This is a dynamic resume builder website where you can fill in your information, and a resume will be generated for you. You can also edit the resume later as needed.
                <br /><br />
                <a 
                  href="https://sparkling-panda-2ec022.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-green-400 transition-colors"
                >
                  Try it out!
                </a>
              </p>
            </div>
          </div>

          <div className="bg-transparent text-center pt-4">
            <h3 className="text-3xl md:text-4xl font-mono font-bold text-green-500 mb-6">
              <span className="text-6xl md:text-8xl block md:inline">MR</span>FOODIE
            </h3>
            
            <div className="group hover:scale-105 hover:shadow-green-400 shadow-lg hover:bg-teal-800 duration-200 rounded-lg p-4">
              <div className="relative ">
                <Image 
                  src="/img4.jpg" 
                  alt="Mr Foodie Screenshot" 
                  width={650}
                  height={800}
                  className="rounded-lg shadow-lg group-hover:shadow-green-400 duration-200"
                />
              </div>
              
              <p className="text-lg md:text-xl font-medium mt-6 pb-6">
                I created a website named Mr. Foodie to showcase my skills, featuring a menu bar, header, footer, and a hero section with food images. It also includes a fast food menu.
                <br /><br />
                <a 
                  href="https://foodie-com-website2.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-green-400 transition-colors"
                >
                  Try it out!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t-4 border-green-400 mx-4 my-8 lg:my-10" />

      <section id="service" className="bg-teal-900 text-center border-y-2 px-4 py-12 md:py-16 lg:py-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
          <span className="text-6xl md:text-7xl lg:text-9xl text-green-400">S</span>ERVICE
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium leading-relaxed border-l-4 border-green-400 pl-4 p-7">
            I am a web developer and designer, and I provide these services to help your business grow online. I create websites that look good and work well on all devices. I design logos that match your business style. I make sure your website is easy to find on search engines, and I offer support to keep your website updated and running smoothly.
          </p>
        </div>
      </section>

      <div className="border-t-4 border-green-400 mx-4 my-8 lg:my-10" />
      
      <Footer />
    </div>
  );
}
