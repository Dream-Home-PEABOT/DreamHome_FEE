import React, {useState, useEffect } from 'react'
import moment from 'moment'

import location from '../../images/report/Charco - Location Map.png';
import plant_1 from '../../images/extras/Fancy Plants - Solo Plant.png';
import plant_2 from '../../images/extras/Fancy Plants - Solo Plant copy.png';
import downpayment from '../../images/report/Charco - Work at Home.png';
import hurry from '../../images/report/Big Shoes - Dynamic Pose.png';

export const ReportCategory = (props: any ) => {
  //interface for props
  const [year, setYear] = useState<number>(1);
  const [currentPlan, setCurrentPlan] = useState(props.plan);

  const displayPlanBtn = () => {
    return Object.keys(props.plan).map((btn, index)=> {
      return (
        <button
          onClick={() => updateValue(btn)}

          key={index}
          className={
            index % 2 === 0
            ? " plan-btn btn y-btn"
            : index % 3 === 0
            ? "btn-1 y-btn"
            :"btn-2 y-btn"
          }>{index +1}
            yr
          </button>
      )
    })
  }

  useEffect(() => {
    if(props.plan){
      setCurrentPlan(props.plan[year])
    }
  }, [props.plan, year])

  const updateValue = (year: any) => {
    setYear(year)
    setCurrentPlan(props.plan[year])
  }

  return (
    <>
    <section
      style={props.position% 2 === 0 ? {backgroundColor: 'white'}: {}}
      className="analysis-section">
      <div
        style={props.position% 2 === 0 ? {backgroundColor:'#89BD9E'}: {backgroundColor: 'white'}}
        className="pipe-up"></div>
      <div
        style={props.position% 2 === 0 ? {backgroundColor:'#89BD9E'}: {backgroundColor: 'white'}}
        className="pipe-down"></div>
      <div className="main-circ-box"><div
        style={props.position% 2 === 0 ? {border:'15px solid #89BD9E'}: {border: '15px solid #ffffff'}}
        className="inner-circle"></div>
      </div>
      <div className="report-img-box">
        <img src={location} alt="location-illustration-1" className="report-img"/>
      </div>

      <div  className="category-box">
        <h1 className="category-title">{props.categoryName || ''}</h1>
      </div>
      <div className="report-info-1">
        {/* <h1 className="repo-title">Location</h1> */}
        <h1 className="repo-title">{props.categoryMainTitle}</h1>
      </div>

      {!props.plan
        ? <div className="report-info-2">
        <h1 className="repo-title">{props.categorySubtitle || ''}</h1>
        <h1 className="repo-title">{props.categorySecondNumber || 0}</h1>
        </div>
        :
        <>
        <div className="plan-box">
          {displayPlanBtn()}
          <h1 className="repo-title">{}</h1>
        </div>
        <div className="btns-inst">
          <h1 className="inst-title">Select a year to see your plan</h1>
        </div>
        </>
      }

      <div className="report-insight">
        {/* <h1 className="insight-title">insight:</h1> */}
        <h1 className="insight">Property taxes and interest rates can vary by location.</h1>
      </div>

      <div className="category-image">
        {props.position % 2 === 0 && <img src={plant_1} alt="blue-plant" className='plant-1'/>}
      </div>
      {!props.plan && <div className="category-image-2">
        <img src={plant_2} alt="blue-plant" className='plant-1'/>
        {/* <h1 className="insight-title">{''}</h1> */}
      </div>}

      <h3 className="solo_number">{props.categoryID || ''}</h3>
      <h1 className="zip-title"></h1>
      <h1 className="report-zip">{props.categoryMainNumber|| '' }</h1>
    </section>

    {props.plan
      ?<section className='analysis-section'>
        <div style={ {backgroundColor: 'white'}} className="pipe-up"></div>
        <div style={ {backgroundColor: 'white'}} className="pipe-down"></div>
      <div className="main-circ-box">
        <div style={{border: '15px solid #ffffff'}}
        className="inner-circle"></div>
      </div>
      <div className="report-img-box">
        <img src={downpayment} alt="location-illustration" className="report-img"/>
      </div>
      <div className="left-img">
        <img src={hurry} alt="tall-man" className="hurry-img"/>
      </div>

      <div className="result-info-1">
        <h1 className="repo-title">Save</h1>
        {/* <h1 className="saving">{currentPlan.monthly_savings ? `$${currentPlan.monthly_savings}.00` : '0'} </h1> */}
        <h1 className="saving">${currentPlan.monthly_savings}.00</h1>
        i
        <h1 className="repo-title">monthly for</h1>
        <h1 className="saving">{ year } yrs </h1>
        </div>

      <div className="result-info-2">
        <h1 className="repo-title">Your DreamHome</h1>
        <h1 className="repo-title">ready to buy</h1>
        <h1 className="repo-title">date is</h1>
        <h1 className="saving">{moment(currentPlan.goal_end_date).format('LL')} </h1>
        {/* <h1 className="saving">{moment().to(currentPlan.goal_end_date)} </h1> */}
        </div>


      </section>
      : ''
    }

    </>
  )
}
