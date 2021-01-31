import './Journey.css'

import {Link} from 'react-router-dom'
import React, { useState} from 'react'
import { useSpring, animated } from 'react-spring'
import read_img from '../../images/questions/Big Shoes - Sitting On Floor.png'
import answer_img from '../../images/home/Big Shoes - Standing Pose.png';
import report_img from '../../images/report/Big Shoes - Jumping On One leg Pose.png';

const Journey:React.FC = () => {
  const [flip, setFlip] = useState(false);
  
  const { transform, opacity } = useSpring({
    opacity: flip  ? 1 : 0,
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 200 }
  })

  return (
    <section data-testid='journey-section' className='journey-section'>
      
      <div className="instructions-box">
        <div className="instructions">Instructions</div>
      </div>
      <div className="container">

        {/* card one */}
        <div className="box">
          <div className="in-one"  onClick={() => setFlip(flip => !flip)}>

            <animated.div 
              className="in-two front" 
              style={{ opacity: opacity.interpolate((o: any)=> 1 - o), transform }}>
                <h1 className="card-number">01</h1>
                <h1 className="card-action">Read</h1>
                <img src={read_img} alt="" className="card-img"/>
                <div className='deco-one'></div>
                <div className='deco-two'></div>
                <div className='deco-three'></div>
                {/* <button className="card-button">find out more</button> */}
            </animated.div>
            <animated.div 
              className="in-two back" 
              style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                <div className="back-data-container">
                  <h1 className="back-title">Why the questions?</h1>
                  <h2 className='back-info'>
                    I will focus on either building a plan for you that will help you reach your goals, or find possible plans based on your current situation. </h2>
                  <h2 className='back-info'>
                    With the information you give me, I can set you on a path to your Dream Home!
                  </h2>
                </div>
            </animated.div>
          </div>
        </div>

        {/* card two */}
        <div className="box">
          <div className="in-one" onClick={() => setFlip(flip=> !flip)}>
            <animated.div 
              className="in-two front" 
              style={{ opacity: opacity.interpolate((o: any)=> 1 - o), transform }}>
                <h1 className="card-number">02</h1>
                <h1 className="card-action">Answer</h1>
                <img src={answer_img} alt="" className="card-img"/>
                <div className='deco-one'></div>
                <div className='deco-two'></div>
                <div className='deco-three'></div>
                {/* <button className="card-button">find out more</button> */}
            </animated.div>
            <animated.div 
              className="in-two back" 
              style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                <div className="back-data-container">
                  <h1 className="back-title">I'll be your guide!</h1>
                  <h2 className='back-info'>I will help through each question and give you some advice.</h2>
                  <h2 className='back-info'>Every question is designed to understand where you are in your journey and I will present you with information about how much you will have to save each month and how long it would take you to get your Dream Home.</h2>
                </div>
            </animated.div>
          </div>
        </div>

        {/* card three */}
        <div className="box">
          <div className="in-one" onClick={() => setFlip(flip=> !flip)}>
            <animated.div 
              className="in-two front" 
              style={{ opacity: opacity.interpolate((o: any)=> 1 - o), transform }}>
                <h1 className="card-number">03</h1>
                <h1 className="card-action">Create</h1>
                <img src={report_img} alt="" className="card-img"/>
                <div className='deco-one'></div>
                <div className='deco-two'></div>
                <div className='deco-three'></div>
                {/* <button className="card-button">find out more</button> */}
            </animated.div>
            <animated.div 
              className="in-two back" 
              style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                <div className="back-data-container">
                  <h1 className="back-title">Enjoy your report!</h1>
                  <h2 className="back-info">Once you have answered all the questions</h2>
                  <h2 className='back-info'>I will generate your report that will provide you with some useful knowledge and potential plans to set you on your path! </h2>
                </div>
            </animated.div>
          </div>
        </div>
        <div className="btn-container">
          <Link to="/survey">
            <button className="btn">Next</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journey;
