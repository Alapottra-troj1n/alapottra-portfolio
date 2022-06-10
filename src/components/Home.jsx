import React, { useState } from 'react';
import { useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Projects from './Projects';
import './Home.css'
import Spinner from './Spinner';

const Home = ({setCursorVariant}) => {
    const [loading,setLoading] = useState(true);

    


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
      },1000);

      return ()=> clearTimeout(timer);
    },[]);

    if(loading) {
            return <Spinner/>
    }
    return (
        <div className=" container mx-auto flex flex-col justify-center items-center">
            <HeroSection setCursorVariant={setCursorVariant} />
            <About/>
            <Projects  />
            <Contact/>
        </div>
    );
};

export default Home;