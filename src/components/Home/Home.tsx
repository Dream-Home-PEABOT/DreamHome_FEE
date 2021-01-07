import React, { useState, useEffect } from 'react';
import img from '../../images/home/Big Shoes - Standing Pose.png'
import './Home.css'
const Home: React.FC = () => {
console.log(img)
  return (
    <section className='home-section'>
      <div className="main-container">

        <div className="title-container">
          <h1 className='title'>My</h1>
          <h1 className='title-2'>Dream Home</h1>
          {/* <h2>Journey Edition</h2> */}
        </div>

        <div className="img-container">
          <img src={img} alt="" className='main-image'/>
        </div>

      </div>

    
      <div>
      </div>
    </section>
  )
}

export default Home;
