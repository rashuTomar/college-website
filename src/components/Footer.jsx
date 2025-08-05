import React from 'react'
import './Footer.css'
import facebook from '../assets/facebook.png'
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import yt from '../assets/youtube.png'


function Footer() {
  return (
    
    <div className='footer'>
        <p>All Rights Reserved.</p><p>ABES Engineering College</p> 
        <ul className='links'>
            <li><a href="https://www.facebook.com/collegeofengabes/" target='_blank'><img src={facebook} alt="" className='logos' /></a></li>
            <li><a href="https://www.instagram.com/abesec_official/" target='_blank'><img src={insta} alt=""  className='logos'/> </a></li>
            <li><a href="https://x.com/abesec032" target='_blank'><img src={twitter} alt=""  className='logos'/></a></li>
            <li><a href="https://www.linkedin.com/school/abes-engineering-college/" target='_blank'><img src={linkedin} alt=""  className='logos'/></a></li>
            <li><a href="https://www.youtube.com/channel/UC2FRToMrgAHFEKkCIgZS2Uw" target='_blank'><img src={yt} alt=""  className='logos'/></a></li>
            
        </ul>
        <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
        <br />
        
      
    </div>
    
    
  )
}

export default Footer
