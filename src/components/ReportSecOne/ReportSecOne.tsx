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
// import location from "../../images/report/Charco - Location Map.png";

export const ReportSecOne = () => {

  const reportContext: any = useContext(ReportContext);
  const keys = Object.keys(reportContext.output);
  const categories = keys.map(category => category.split('_')[1]);
  const insight = keys.map(category => reportContext.output[category]?.information);

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
    {/* //clean up this more */}
              <div className="report-numbers-box">
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Your Credit Score</h1>
                  </div>
                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{number:reportContext.input.B_credit_score}}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">{`$${props.number.toFixed()}`}</h1>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Your Monthly Income</h1>
                  </div>
                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{number:reportContext.input.C_salary}}>
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">${props.number.toFixed()}</h1>
                      </div>
                    )}
                  </Spring>
                </div>{" "}
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Your Monthly Debt</h1>
                  </div>

                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{ number:reportContext.input.D_monthly_debt}}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">${`${props.number.toFixed()}`}</h1>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Mortgage Term</h1>
                  </div>

                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{ number: reportContext.input.F_mortgage_term}}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">{`${props.number.toFixed()}yrs`}</h1>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Monthly rent</h1>
                  </div>

                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{ number: reportContext.input.I_rent}}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">${`${props.number.toFixed()}`}</h1>
                      </div>
                    )}
                  </Spring>
                </div>
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
        plant={}
        />

      <ReportCategory 
        title={categories[1]}
        insight={insight[0]}
        position={keys.indexOf(keys[1])+1}
        centerImg={goodJob}
        />

      <ReportCategory 
        title={categories[2]}
        position={keys.indexOf(keys[2])+1}
        insight={insight[0]}
        centerImg={mobile}
        />

      <ReportCategory 
        title={categories[3]}
        insight={insight[0]}
        position={keys.indexOf(keys[3])+1}
        centerImg={downpayment}
        plan={reportContext.output.D_downpayment.plan_style}
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
