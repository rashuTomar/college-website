import React from 'react'
import './Campus.css'  
import gallery1 from '../assets/gallery_img1.jpeg'
import gallery2 from '../assets/gallery_img2.jpeg'
import gallery3 from '../assets/gallery_img3.jpeg'
import gallery4 from '../assets/gallery_img4.jpeg'
import arrow from '../assets/white-arrow.png'

export default function Campus() {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery4} alt="" />
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            
        </div>
        <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
      
    </div>
  )
}
