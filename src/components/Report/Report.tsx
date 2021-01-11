import React, {useContext, useState, useEffect} from 'react'
import {ReportContext, AnswerContext} from '../../types'
import { Cube } from '../Cube/Cube';
import './Report.css';
import { ReportCategory } from '../ReportCategory/ReportCategory';
import back_img from '../../images/report/Big Shoes - Jumping On One leg Pose.png';
import location from '../../images/report/Charco - Location Map.png';
import plan from '../../images/report/Charco - Good Job.png';
import principal from '../../images/report/Charco - Inbox.png';
import monthly from '../../images/report/Charco - Mobile Life.png';
import downpayment from '../../images/report/Charco - Work at Home.png';

const Report = () => {

  const categoryImages = [location, plan, principal, monthly, downpayment]
  const [report, updateReport] = useState()
  let userReport = useContext(ReportContext)
  let answers = useContext(AnswerContext)

  useEffect(()=>{
    updateReport(userReport)
  },[userReport])

  const displayAnalysisSections = () =>{
    const reportData = Object.keys(userReport)
    
    return reportData.map((data, key) =>{
      console.log(userReport)
      let subtitle_1 = Object.keys(userReport[data])[0].replaceAll(/_|\-/g, " ")
      let subtitle_2 = Object.keys(userReport[data])[1].replaceAll(/_|\-/g, " ")

      return <ReportCategory 
        plan={userReport[data].ten_year_plan }
        categoryName={[data]}
        categoryMainNumber={
          userReport[data].zip_code
          || userReport[data].based_on_rent
          || userReport[data].monthly_principal
          || userReport[data].down_payment_percentage_selected
        }
        categoryMainTitle={subtitle_1}
        categorySubtitle={subtitle_2}
        categorySecondNumber={
          userReport[data].location
          || userReport[data].goal_principal
          || userReport[data].estimated_true_monthly
          || userReport[data].down_payment_saved
        }
        categoryID={key + 1}
        />
    })
  }

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
                <h1 className="num-ci-data">{userReport.monthly.add_ons.property_tax}</h1>
              </div>

            </div>
            {/* remove from here */}
            <div className="num ">
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Downpayment %</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">{userReport.downpayment.down_payment_percentage_selected}</h1>
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
                <h1 className="num-ci-data">{/*answers.creditScore*/}</h1>
              </div>

            </div>
            <div className="num ">
              <div className="num-ci-box-up">
                <h1 className="num-ci-title">Downpayment #</h1>
              </div>

              <div className="num-ci-box-down">
                <h1 className="num-ci-data">{userReport.downpayment.down_payment_saved}</h1>
              </div>
              
            </div>
            
          </div>
          
          <div className="report-title">
            <h1 className="big-report">Report</h1>
          </div>
          <div className='report-img-box_1'>
            <img src={back_img} alt="" className='report_img'/>
          </div>
        </div>

    </section>
    {displayAnalysisSections()}
    </>
    }
    </>
  )
}

export default Report
