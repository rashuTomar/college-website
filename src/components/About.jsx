import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_img from '../assets/play.png'

export default function About({setPlayState,playState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
        <img src={play_img} alt="" className='play_img' onClick={()=>{setPlayState(!playState)}} />

      </div>
      <div className="about-right">
        <h3>ABOUT COLLEGE</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>At ABES Engineering College, we ignite the flames of curiosity, knowledge, and innovation. Established over two decades ago under the esteemed Society for Educational Excellence, our institution has evolved into a dynamic center of learning nestled in the heart of Ghaziabad. Our unwavering commitment to excellence has garnered us noteworthy positions in the National Institute Ranking Framework (NIRF), a testament to our dedication to quality education.</p>
        <p>Beyond engineering, our academic spectrum encompasses a diverse range of programs, including M.Tech, MCA, and MBA courses, designed to cater to the multifaceted aspirations of our students. As we stride forward, our core values of integrity, excellence, and innovation remain at our foundation. ABES Engineering College is not just an institution; it's a journey of transformation, empowerment, and enlightenment. Join us on this extraordinary voyage, where potential finds its path, and dreams take flight.</p>
        

      </div>
      
    </div>
  )
}
