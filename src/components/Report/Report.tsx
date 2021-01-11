import React, {useContext, useState} from 'react'
import {ReportContext} from '../../types'
import { Cube } from '../Cube/Cube';
import './Report.css'
import back_img from '../../images/report/Big Shoes - Jumping On One leg Pose.png'
import location from '../../images/report/Charco - Location Map.png'
import plant_1 from '../../images/extras/Fancy Plants - Solo Plant.png'
import plant_2 from '../../images/extras/Fancy Plants - Solo Plant copy.png'

const Report = () => {

  let userReport = useContext(ReportContext)

  return (
    <>
    {!userReport ? <Cube/> : 
    <>
     <section className="report-section">
        <div className='inner-container'>
          <div className="app-title">
            <div className="title-container">
              <h1 className='title header'>My</h1>
              <h1 className='title-2 header'>Dream Home</h1>
              <div className="number-title-box">
                <h2 className="number-title">Numbers</h2>
              </div>
            </div>
          </div>
          
          <div className="report-numbers-box">

            <div className="num ">
             
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Property tax</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">1.5%</h1>
              </div>

            </div>
            {/* remove from here */}
            <div className="num ">
             
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Downpayment %</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">20%</h1>
              </div>

            </div>
            <div className="num ">
             
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Mortgage term</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">30 yrs</h1>
              </div>

            </div>
            <div className="num ">
             
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Credit Score</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">711</h1>
              </div>

            </div>
            <div className="num ">
             
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Downpayment #</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">$10,000</h1>
              </div>
              
            </div>
            {/* to here */}
            
          </div>
          
          <div className="report-title">
            <h1 className="big-report">Report</h1>
          </div>
          <div className='report-img-box_1'>
            <img src={back_img} alt="" className='report_img'/>
          </div>
        </div>
    </section>
    {/* this could be it own component */}
    <section className="analysis-section">
      <div className="pipe-up"></div>
      <div className="pipe-down"></div>
      <div className="main-circ-box">
        <div className="inner-circle">
        </div>
      </div>
      <div className="report-img-box">
        <img src={location} alt="" className="report-img"/>
      </div>

      <div  className="category-box">
        <h1 className="category-title">Location</h1>
      </div>
      <div className="report-info-1">
        {/* <h1 className="repo-title">Location</h1> */}
        <h1 className="repo-title">Denver, CO.</h1>
      </div>

      <div className="report-info-2">
        <h1 className="repo-title">Property tax</h1>
        <h1 className="repo-title">2.79%</h1>
      </div>

      <div className="report-insight">
        {/* <h1 className="insight-title">insight:</h1> */}
        <h1 className="insight">Property taxes and interest rates can vary by location.</h1>
      </div>

      <div className="category-image">
        <img src={plant_1} alt="" className='plant-1'/>
      </div>
      <div className="category-image-2">
        <img src={plant_2} alt="" className='plant-1'/>
      </div>

      <h3 className="solo_number">1</h3>
      <h1 className="zip-title">ZIP</h1>
      <h1 className="report-zip">80228</h1>

    </section>
    </>
    }
    </>
  )
}

export default Report
