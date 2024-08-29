import React from 'react'
import pic from '../../public/m.jpg'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { ReactTyped} from "react-typed";

function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to your resume in the public folder
    link.download = "resume.pdf"; // File name for download
    link.click();
  };
  return (
  <>
     <div name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className="flex flex-col md:flex-row ">
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl' >Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello,I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
           className="text-red-700 font-bold"
          strings={["Developer","Programmer","coder"]}
          typeSpeed={40}
          backspeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>
            I am a passionate web developer dedicated to creating impactful digital solutions. 
            With a strong foundation in HTML, CSS, JavaScript, React, and various modern frameworks, 
            I enjoy building responsive and intuitive websites and applications. I'm always eager to 
            learn new technologies and collaborate with like-minded professionals to bring innovative ideas to life.
            </p>
            <br />
            {/* Social media icons */}
            <div className='flex  flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold '>Avaiable on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href='https://github.com/anishakomal'   target="blank">
                    <FaGithub className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                 
                  <li>
                    <a href='https://in.linkedin.com/'   target="blank">
                    <FaLinkedin className='text-2xl cursor-pointer' />
                    </a>
                  </li>
               
                  {/* <li>
                   <a href='https://www.youtube.com/'  target="blank">
                   <IoLogoYoutube className='text-2xl cursor-pointer' />
                   </a>
                  </li> */}
                  
                  <li>< a href="https://t.me/"  target="blank">
                    <FaTelegramPlane className='text-2xl cursor-pointer' />
                    </a>
                  </li>


                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working on</h1>
                <div className='flex space-x-5'>
                  <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  < SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  < FaReact  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                  < IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
            </div>
            <br></br>
            <button
              onClick={downloadResume}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Resume
            </button>
          </div>
          <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 '>
          <img
           src={pic}
            className="rounded-full md: w-[450px] md: h-[450px]"
          alt=""
          />
        </div>
      </div>
     </div>
      <hr/>
    </>

  )
}

export default Home

