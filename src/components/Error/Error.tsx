import React, { useState, useEffect } from 'react';
import './Error.css';
import error_img from '../../images/errors/Big Shoes - Torso.png'
import bkg_img from '../../images/errors/Charco - Broken.png'

const Error: React.FC = () => {

  return (

    <section className="error-section">
      <div className="container">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
        <div className="message--box">
          <h1 className="error-message">
            404 Error
          </h1>
        </div>
        <div className="err-box-2">
          <img src={bkg_img} alt="" className="error-image"/>
        </div>
        <div className="err-box">
          <img src={error_img} alt="" className="error-image"/>
        </div>
      </div>
      
  
    </section>



   

  )
}

export default Error;

//<Route component={Error} />
//wrap routes in a <Switch>
