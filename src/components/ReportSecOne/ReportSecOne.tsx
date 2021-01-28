import React, { useContext } from "react";
import { ReportContext } from "../../helpers/context";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import back_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import {  ReportCategory } from '../ReportCategory/ReportCategory'
import goodJob from '../../images/report/Charco - Inbox.png'
import downpayment from "../../images/report/Charco - Work at Home.png";
import location from "../../images/report/Charco - Location Map.png";
import mobile from "../../images/report/Charco - Mobile Life.png"
import plant_1 from "../../images/extras/Fancy Plants - Solo Plant.png";
import plant_2 from "../../images/extras/Fancy Plants - Solo Plant copy.png";


export const ReportSecOne = () => {

  const reportContext: any = useContext(ReportContext);
  const keys = Object.keys(reportContext.output);
  const categories = keys.map(category => category.split('_')[1]);
  const insight = keys.map(category => reportContext.output[category]?.information);

  const injectNumbers = () => {

    const numbersToDisplay = [
      'B_credit_score', 
      'C_salary', 
      'D_monthly_debt', 
      'F_mortgage_term', 
      'I_rent'
    ]
    let numbers = numbersToDisplay.reduce((acc: any, curr) => {
      acc[curr] = reportContext.input[curr]
      return acc
    },{})

    return Object.entries(numbers).map(( entries: any) => {
      const numTitle = entries[0].split('_').splice(1).join(' ');
      console.log(numTitle)
      return (
        <div className="num ">
          <div className="num-ci-box-up">
            <h1 className="num-ci-title">Your {numTitle}</h1>
          </div>
          <Spring
            config={{ delay: 100, duration: 1000 }}
            from={{ number: 0 }}
            to={{number : entries[1]}}
          >
            {(props) => (
              <div className="num-ci-box-down">
                <h1 className="num-ci-data">{`${props.number.toFixed()}`}</h1>
              </div>
            )}
          </Spring>
        </div>
      )
    })
  }
  return (
    <>
      <section className='report-section'>
      <div className="inner-container">
              <div className="app-title">
                <div className="title-container">
                  <h1 className="title header">My</h1>
                  <h1 className="title-2 header">Dream Home</h1>
                  <div className="number-title-box">
                    <h2 className="number-title">My Numbers</h2>
                  </div>
                </div>
              </div>
              <div className="report-numbers-box">
                {injectNumbers ()}
              </div>
              <div className="report-title">
                <h1 className="big-report">Report</h1>
              </div>
              <div className="report-img-box_1">
                <img src={back_img} alt="" className="report_img" />
              </div>
            </div>

      </section>    

      <ReportCategory 
        title={categories[0]}
        insight={insight[0]}
        position={keys.indexOf(keys[0])+1}
        centerImg={location}
        valueOne={reportContext.output.A_location.city_state}
        valueLeft={reportContext.output.A_location.zipcode}
        valueRightTitle={'Average Home Price in this Area'}
        valueRight={reportContext.output.A_location.average_home_price}
        plant={plant_1}
        />

      <ReportCategory 
        title={categories[1]}
        insight={insight[0]}
        position={keys.indexOf(keys[1])+1}
        centerImg={goodJob}
        plant={plant_2}
        />

      <ReportCategory 
        title={categories[2]}
        position={keys.indexOf(keys[2])+1}
        insight={insight[0]}
        centerImg={mobile}
        plant={plant_1}
        />

      <ReportCategory 
        title={categories[3]}
        insight={insight[0]}
        position={keys.indexOf(keys[3])+1}
        centerImg={downpayment}
        plan={reportContext.output.D_downpayment.plan_style}
        plant={plant_2}
        />

      {/* <section className='location-info'>
        <div className='city-name'>
          {reportContext.output.A_location.city_state}
        </div>
        <div className='zip-code'>
          {reportContext.output.A_location.zipcode}
        </div>
        <div className='city-name'>
          <h2>Average Home Price in this Area</h2>
          ${reportContext.output.A_location.average_home_price}
        </div>
      </section> */}
       
      <div className="sigup">
        <h1 className="fina-mess">
          Sign-up
          <Link to="/login">
            <span className="link">here</span>
          </Link>
          Want to save your report?
        </h1>
      </div>

    </>
  )
};
