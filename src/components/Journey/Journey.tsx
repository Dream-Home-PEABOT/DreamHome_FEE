import React  from 'react';
import './Journey.css'
import bkg_img from '../../images/journey/Big Shoes - Hero.png'
import {Link} from 'react-router-dom'

const Journey:React.FC = () => {

  return (

    <section data-testid='journey-section' className='journey-section'>

      <div className="container">

        <div data-testid='information-container' className='information-container'>
          <div className="info-box">
            <h2 className='info'>Hi, my name is Teki and I will be here to accompany you throughout this journey. One thing you should know is that I am a vocabulary specialist.</h2>
          </div>
        
        </div>

        <div className="box-title">
          <div className="title-container">
            <h1 className='title'>My</h1>
            <h1 className='title-2'>Dream Home</h1>
          </div>
        </div>
        
        <div className='img-box'>
          <img  data-testid='journey-img' src={bkg_img} alt="journey image" className='journey-img'/>
        </div>

        <div className="btn-container">
          <Link to="/survey">
          <button className="btn">Start</button>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Journey;
