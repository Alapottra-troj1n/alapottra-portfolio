import React from 'react';
import MyImage from '../assets/business-3d-young-man-sitting-on-the-floor-with-dog-in-sweater-and-taking-photo.png'

const HeroSection = () => {
    return (
          <div className="mt-20 flex  flex-col justify-center items-center">
            <h1 className="lg:text-8xl md:text-7xl text-5xl whitespace-nowrap font-bold text-white">Hello, I'm Ala</h1>
            <p className="py-6 px-4 lg:px-0 text-center text-xl lg:text-2xl">I develop <span className="text-white">modern</span> and <span className="text-white">robust</span> websites and applications </p>
            <img src={MyImage} className="w-3/4" alt="" />
          </div>
      
    );
};

export default HeroSection;