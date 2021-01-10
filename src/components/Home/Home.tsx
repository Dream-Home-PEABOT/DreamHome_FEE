import React, { useState, useEffect } from 'react';
import bkg_img from '../../images/home/Big Shoes - Standing Pose.png';
import './Home.css';
import {Spring} from 'react-spring/renderprops';

const Home: React.FC = () => {


  return (
    <section className='home-section'>
      <div className="main-container">
        <Spring
        from={{ opacity: 0, margin: -1000}}
        to={{ opacity: 1, margin: 0}}
        config={{delay: 1000, duration: 1000}}
        >
        {props => <div className="title-container">
          <h1 className='title'>My</h1>
          <h1 className='title-2'>Dream Home</h1>
        </div>}
        </Spring>
        <div className="banner-bx">

          <h2>Journey Edition</h2>
        </div>
        <Spring
          from={{ opacity: 0}}
          to={{ opacity: 1}}
          config={{delay: 1000, duration: 1000}}>
          {props => <div style={props} className="img-container">
            <img src={bkg_img} alt="" className='main-image'/>
          </div>}
        </Spring>

      </div>
    

    </section>
  )
}

export default Home;
