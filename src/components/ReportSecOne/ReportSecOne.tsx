import React, { useState, useEffect, useContext } from "react";
import { ReportContext } from "../../helpers/context";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import back_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";

export const ReportSecOne = () => {

  const reportContext: any = useContext(ReportContext);

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

        {/* <div className='top-circle-1'>
          <h2>Your Credit Score</h2>
          {reportContext.input.B_credit_score}
        </div>
        <div className='top-circle-1'>
          <h2>Your Monthly Income</h2>
          ${reportContext.input.C_salary}
        </div>
        <div className='top-circle-1'>
          <h2>Your Monthly Debt</h2>
          ${reportContext.input.D_monthly_debt}
        </div>
        <div className='top-circle-1'>
          <h2>Your Mortgage Term</h2>
          {reportContext.input.F_mortgage_term} year
        </div> */}
      </section>

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

    </>
  )
};
