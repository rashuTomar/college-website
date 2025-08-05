import React from 'react'
import './Program.css'
import program1 from '../assets/program-1.jpg'
import program2 from '../assets/program-2.jpg'
import program3 from '../assets/program-3.jpg'
import programIcon1 from '../assets/programIcon1.png';
import programIcon2 from '../assets/programIcon2.png';
import programIcon3 from '../assets/programIcon3.png';
export default function Program() {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} height="246px"/>
            <div className="caption">
                <img src={programIcon1} alt="" />
                <p>Graduation degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={programIcon2} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} height="245px"/>
            
            <div className="caption">
                <img src={programIcon3} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
      
    </div>
  ) 
}
