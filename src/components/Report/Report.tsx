import React from 'react'
import './Report.css'
import back_img from '../../images/report/Big Shoes - Jumping On One leg Pose.png'

const Report = () => {
  return (
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
  )
}

export default Report