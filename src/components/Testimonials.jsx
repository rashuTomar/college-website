import React, { useRef } from "react";
import "./Testimonials.css";
import next from "../assets/next-btn.png";
import back from "../assets/back-btn.png";
import user1 from '../assets/user1.jpeg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpeg'
import user4 from '../assets/user4.jpeg'



export default function Testimonials() {

    const slider=useRef()
    let tx=0;

const slideForward =() =>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`

}

const slideBackward =() =>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translate(${tx}%)`
    
}
  return (
    <div className="testimonials">
      <img src={next} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Nakul Dhull</h3>
                  <span>Atlassian, India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque, a dicta deleniti similique id voluptas quia ut
                consequatur accusamus consectetur rem totam, officiis, provident
               
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Lakshay Chaudhary</h3>
                  <span>Microsoft, India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque, a dicta deleniti similique id voluptas quia ut
                consequatur accusamus consectetur rem totam, officiis, provident
                
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3}alt="" />
                <div>
                  <h3>Arpit Bala</h3>
                  <span>Amazon, India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque, a dicta deleniti similique id voluptas quia ut
                consequatur accusamus consectetur rem totam, officiis, provident
                
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Kartikey Sejwal</h3>
                  <span>Google, India</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eaque, a dicta deleniti similique id voluptas quia ut
                consequatur accusamus consectetur rem totam, officiis, provident
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
