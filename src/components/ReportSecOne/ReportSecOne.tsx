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
  const planStyles =  reportContext.output.D_downpayment.plan_style
  const planList = Object.entries(planStyles).map(plan => ({ [plan[0]] :[plan[1]]}))


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
    {/* Location */}
      <ReportCategory 
        title={categories[0]}
        insight={insight[0]}
        position={keys.indexOf(keys[0])+1}
        centerImg={location}
        plant={plant_1}
        valueOne={reportContext.output.A_location.city_state}
        valueLeft={reportContext.output.A_location.zipcode}
        valueRightTitle={'Average Home Price in this Area'}
        valueRight={`$${reportContext.output.A_location.average_home_price}`}
        />
  {/* Principle */}
      <ReportCategory 
        title={categories[1]}
        insight={insight[1]}
        position={keys.indexOf(keys[1])+1}
        centerImg={goodJob}
        plant={plant_2}
        valueOne={'Mortgage Rate'}
        valueLeft={`${reportContext.output.B_principal.mortgage_rate}%`}
        valueRightTitle={'Your Selected Goal Principle'}
        valueRight={`$${reportContext.output.B_principal.goal_principal}`}
        />
{/* Principle based on rent */}
{/* here we will need to add the conditional rendering  */}
{/* reportContext.output.B_principal.goal_principal > 0 && */}
<ReportCategory 
        title={'Principal Based on Rent'}
        insight={insight[1]}
        position={keys.indexOf(keys[1])+1}
        centerImg={goodJob}
        plant={plant_2}
        valueOne={'Potential Goal Principle'}
        valueLeft={`$${reportContext.input.I_rent}`}
        valueRightTitle={'This number is calculated as a possible goal principle based off of what you are currently paying in rent.'}
        valueRight={`$${reportContext.output.B_principal.principal_based_on_rent}`}
        />
        {/* end of conditional rendering */}

    {/* monthly category */}
      <ReportCategory 
        title={categories[2]}
        position={keys.indexOf(keys[2])+1}
        insight={insight[2]}
        centerImg={mobile}
        valueOne={'Estimated True Monthly'}
        valueLeft={`$${reportContext.output.C_monthly.estimated_true_monthly}`}
        valueRightTitle={'Monthly Principal'}
        valueRight={`$${reportContext.output.C_monthly.monthly_principal}`}
        pmi={reportContext.output.C_monthly.pmi_by_location}
        taxes={reportContext.output.C_monthly.property_tax_by_location}
        insurance={reportContext.output.C_monthly.home_insurance_by_location}
        />
{/* downpayment */}
      <ReportCategory 
        title={categories[3]}
        insight={insight[3]}
        position={keys.indexOf(keys[3])+1}
        centerImg={downpayment}
        plan={planList}
        plant={plant_2}
        valueOne={'Downpayment saved'}
        valueLeft={reportContext.output.D_downpayment.downpayment_saved}
        valueRightTitle={'Average Home Price in this Area'}
        valueRight={reportContext.output.A_location.average_home_price}
        keysPlan={Object.keys(planStyles)}
        
        />
       
      <div className="sigup">
        <h1 className="fina-mess">
          Want to save your report?<br/>
          Sign-up
          <Link to="/login">
            <span className="link">here</span>
          </Link>
        </h1>
      </div>

    </>
  )
};
