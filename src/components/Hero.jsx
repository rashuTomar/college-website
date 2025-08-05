import React from 'react'
import "./Hero.css"
import arrow from '../assets/clipart2026623.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>For over two decades, ABES has firmly established itself in society as epitome of outcome-focused learning. Its enduring reputation embodies trust and value.</p>
        <button className='btn'> Explore more <img src={arrow} alt="" /></button>
      </div>
      
    </div>
  )
}

export default Hero;
