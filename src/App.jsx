import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
import './index.css';

import HeroSection from './components/hero';
import ProjectCard from './components/projectcard';
import ProjectsSection from './components/projects';
import WhySection from './components/why';

function App() {


  return (
    <>
      
     
     <HeroSection />
     
      <div className="hero-cta">
          <img  className='picture_separator' src='src/assets/72.png'></img>
          <span className="hero-arrow">→</span>
          <a className="support-btn" href="#projects"><button >SUPPORT</button></a>
        </div>
      <div className='sea-separator'><img  className='sea-picture' src='src/assets/IMG_8220.JPG'></img>
      <hr className="divider"></hr>
      </div>
     <ProjectsSection/>
     <WhySection/>
     <div><img className="why-img" scr="src/assets/photo.png"></img></div>
    </>
      
  )
}

export default App
