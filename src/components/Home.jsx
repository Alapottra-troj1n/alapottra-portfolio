import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Projects from './Projects';

const Home = () => {
    return (
        <div className=" container mx-auto flex flex-col justify-center items-center">
            <HeroSection/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;