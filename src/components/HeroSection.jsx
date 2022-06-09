import React from 'react';
import MyImage from '../assets/business-3d-young-man-sitting-on-the-floor-with-dog-in-sweater-and-taking-photo.png'
import { FaGithub,FaFacebook,FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    return (
          <div className="mt-20 flex  flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-7xl text-5xl whitespace-nowrap font-bold text-white">Hello, I'm Ala</h1>
            <p className="py-6 px-4 lg:px-0 text-center text-xl lg:text-2xl">I develop <span className="text-white">modern</span> and <span className="text-white">robust</span> websites and applications </p>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start " >
            <img src={MyImage} alt="" />
            <div className="flex lg:flex-col gap-5 mt-5 lg:mt-0 " >
            <a href="https://github.com/Alapottra-troj1n" rel="noopener noreferrer" target="_blank" ><FaGithub className="text-2xl hover:text-secondary "  /></a>
            <a href="https://www.linkedin.com/in/alapottra" rel="noopener noreferrer" target="_blank" ><FaLinkedin className="text-2xl hover:text-secondary "  /></a>
            <a href="https://www.facebook.com/Alapottra" rel="noopener noreferrer" target="_blank" ><FaFacebook className="text-2xl hover:text-secondary "  /></a>
            
            
            </div>
            </div>
          </div>
      
    );
};

export default HeroSection;