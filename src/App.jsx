import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program from './components/Program'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/VideoPlayer'


const App = () => {
  const [playState, setPlayState]= useState(false);
  return (
     <>

    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='our progrmas' title='What We Offer'/>
      <Program/>
      <About setPlayState={setPlayState} playState={playState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What a stundent says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>


    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />

    
    

    </>
  
  
  
  
  

)
}

export default App