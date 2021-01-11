import React, {useState, useEffect} from 'react'

import location from '../../images/report/Charco - Location Map.png';
import plant_1 from '../../images/extras/Fancy Plants - Solo Plant.png';
import plant_2 from '../../images/extras/Fancy Plants - Solo Plant copy.png';
import downpayment from '../../images/report/Charco - Work at Home.png';
import hurry from '../../images/report/Big Shoes - Dynamic Pose.png';

export const ReportCategory = (props: any ) => {
 
  const [year, setYear] = useState<string>('one');
  const [currentPlan, setCurrentPlan] = useState(props.plan)
  // const [currentPlan, setCurrentPlan] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)


  const displayPlanBtn = () => {
    return Object.keys(props.plan).map((btn, index)=> {
      return (
        <button 
          onClick={() => setYear(btn)}
          key={index}
          className={
            index % 2 === 0 
            ? " plan-btn btn y-btn"
            : index % 3 === 0 
            ? "btn-1 y-btn"
            :"btn-2 y-btn"
          }>{index +1} yr</button>
      )
    })
  }

  useEffect(() => {
    if(currentPlan){
      setCurrentPlan(props.plan)
    }
    if(!year){
      setCurrentPlan(props.plan[year])
    }
    
  },[props, year])


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
        <img src={location} alt="" className="report-img"/>
      </div>

      <div  className="category-box">
        <h1 className="category-title">{props.categoryName || ''}</h1>
      </div>
      <div className="report-info-1">
        {/* <h1 className="repo-title">Location</h1> */}
        <h1 className="repo-title">{props.categoryMainTitle || ''}</h1>
      </div>

      {!props.plan 
        ? <div className="report-info-2">
        <h1 className="repo-title">{props.categorySubtitle || ''}</h1>
        <h1 className="repo-title">{props.categorySecondNumber || 0}</h1>
        </div>
        : <div className="plan-box">
        {displayPlanBtn()}
      <h1 className="repo-title">{}</h1>
    </div>
      }

      <div className="report-insight">
        {/* <h1 className="insight-title">insight:</h1> */}
        <h1 className="insight">Property taxes and interest rates can vary by location.</h1>
      </div>

      <div className="category-image">
        {props.position % 2 === 0 && <img src={plant_1} alt="" className='plant-1'/>}
      </div>
      {!props.plan && <div className="category-image-2">
        <img src={plant_2} alt="" className='plant-1'/>
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
        <img src={downpayment} alt="" className="report-img"/>
      </div>
      <div className="left-img">
        <img src={hurry} alt="" className="hurry-img"/>
      </div>

      <div className="result-info-1">
        <h1 className="repo-title">Down payment plan</h1>
        <h1 className="repo-title">{year} yrs</h1>
        <h1 className="repo-title">{ currentPlan[year].monthly_plan}</h1>
        </div>


      </section>
      : ''
    }

    </>
  )
}
