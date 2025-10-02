import { useState } from 'react'
import './App.css'
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './components/LogoSection'
import FeatureCards from './components/sections/FeatureCards'
import ExperienceSection from './components/sections/ExperienceSection'
import TechStack from './components/sections/TechStack'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  
 return (
    <>
    <Navbar/>
     <Hero/>
     <ShowcaseSection/>
     <LogoSection/>
     <FeatureCards/>
     <ExperienceSection/>
     <TechStack/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
