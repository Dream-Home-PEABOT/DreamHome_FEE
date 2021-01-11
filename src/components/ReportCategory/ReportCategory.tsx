import React, {useState, useEffect} from 'react'

import location from '../../images/report/Charco - Location Map.png';
import plant_1 from '../../images/extras/Fancy Plants - Solo Plant.png';
import plant_2 from '../../images/extras/Fancy Plants - Solo Plant copy.png';

export const ReportCategory = (props: any ) => {
 
  const [year, setYear] = useState<any>('');
  const [currentPlan, setCurrentPlan] = useState({})
  // const plan = Object.keys(props.plan);

  const displayPlanBtn = () => {
    return Object.keys(props.plan).map((btn, index)=> {
      return (
        <button 
          onClick={(e) => setYear(btn)}
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
    if(year){
    setCurrentPlan(props.plan[year])
    }
  },[year])


  return (
    <section 
      style={props.position% 2 === 0 ? {backgroundColor: 'white'}: {}}
      className="analysis-section">
      <div className="pipe-up"></div>
      <div className="pipe-down"></div>
      <div className="main-circ-box">
        <div className="inner-circle"></div>
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
      {/* <h1 className="repo-title">{props.categorySecondNumber || 0}</h1> */}
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
        <h1 className="insight-title">{}</h1>
      </div>}

      <h3 className="solo_number">{props.categoryID || ''}</h3>
      <h1 className="zip-title"></h1>
      <h1 className="report-zip">{props.categoryMainNumber }</h1>

    </section>
  )
}
