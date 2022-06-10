import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {motion} from 'framer-motion'
import Blogs from './components/Blogs';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  const [cursorVariant, setCursorVariant] = useState('default');
 

  useEffect(() =>{


    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener('mousemove',mouseMove);

    return () => {
      window.removeEventListener('mousemove',mouseMove);
    }

  },[])

  const variants = {
    default : {
      x:mousePosition.x -16,
      y: mousePosition.y -16
    },
    
    text:{
      height: 150,
      width: 150,
      x:mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: 'difference'
    }
  }


  return (
    <div className="App">
      <motion.div 
      variants={variants}
      animate={cursorVariant}
      className='cursor'></motion.div>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home setCursorVariant={setCursorVariant} />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer/>
 
    </div>
  );
}

export default App;
