import React, {useState, useEffect, useContext} from 'react';
import downpayment from "../../images/report/Charco - Work at Home.png";
import hurry from "../../images/report/Big Shoes - Dynamic Pose.png";
import { ReportContext } from "../../helpers/context";

export const ReportCategory = (props: any) => {

  let userReport = useContext(ReportContext);

  const [currentStyle, setCurrentStyle] = useState<string>('med_savings_plan');
  const [currentPlan, setCurrentPlan] = useState<string>('plan_2');
  let plan = userReport.output.D_downpayment.plan_style;
  let final = plan[currentStyle][currentPlan]

  const injectYear = () => {
    const yearButtons = Object.keys(plan[currentStyle]).map(year => {
      return 
    })
  }


  const updatePlan =(e: any) => {
    const id = e.target.id
    setCurrentStyle(id)
  }

  const injectPlan = ()=> {
    if (plan && props.planKeys){
      const result = props.planKeys.map((planName: string, i: number) => {
        // console.log(planName)
        return (
          <div 
            onClick={(e) => updatePlan(e)}
            key={i} 
            className='repo-title'
            id={planName}>
              <div id={planName} className="down-ci ">{plan[planName].savings_style_percentage}%</div>
              <h1 id={planName} className="down-title ">{planName.split('_')[0]+ ' ' + planName.split('_')[2] }</h1>
          </div>
        )
      });
      return result
    }
  }

  return (
    <>
      <section
        style={props.position % 2 === 0 ? { backgroundColor: "#ffffff" } : {}}
        className="analysis-section"
      >
        <div style={props.position % 2 === 0? { backgroundColor: "#89BD9E" }: { backgroundColor: "#ffffff" }}className="pipe-up"></div>
        <div
          style={ props.position % 2 === 0? { backgroundColor: "#89BD9E" }: { backgroundColor: "#ffffff" }}className="pipe-down"></div>
        <div className="main-circ-box">
          <div style={props.position % 2 === 0? { border: "15px solid #89BD9E" }: { border: "15px solid #ffffff" }}className="inner-circle"></div>
        </div>
        <div className="report-img-box">
          <img
            src={props.centerImg}
            alt="location-illustration-1"
            className="report-img"/>
        </div>

        <div className="category-box">
          <h1 className="category-title">{props?.title} category</h1>
        </div>

        <div className="report-info-1">

          <h1 className="repo-title">{props.valueOne}</h1>
        </div>



        {!props.plan? (
          <>
            <div className="report-info-2">
              <h1 className="repo-title">{props.valueRight}</h1>
            </div>

    
            <div className="report-info-3">
              <h1 className="repo-title">{props.valueRightTitle}</h1>
            </div>

            
          </>
        ) : (
          <>
          <div className="down-num">
            {injectPlan()}
          </div>

            <div className="plan-box">
              <h1 className="inst-title">Now you can select and see the different plan we got for you</h1>
            </div>
            <div className="btns-inst">
              <h1 className="inst-title">Select a year to see your plan</h1>
            </div>

            
          </>
        )}

        <div className="report-insight">
          <h1 className="insight-title">insight:</h1>
          <h1 className="insight">{props.insight}</h1>
        </div>

        {/* {!props.plan || props.title === 'monthly'? <div className="category-image">
          <img src={props.plant} alt="blue-plant" className="plant-1" />
        </div>: ''
        } */}

        {props.title === 'monthly' && 
          <div className="monthly-cat">
            
            {/* <div className="month-one">
              <h1 className=" title">${props.pmi}</h1>
              <h1 className="title buttom">pmi</h1>
            </div> */}

            <div className="month-one">
              <h1 className="num-month">${props.taxes}</h1>
              <h1 className="num-month buttom">taxes</h1>
            </div>

            <div className="month-one">
              <h1 className="num-month">${props.insurance}</h1>
              <h1 className="num-month buttom">insurance</h1>

            </div>

          
        </div> 

        }
  
        <h3 className="solo_number">{props.position}</h3>
        {/* reorganize this zip title is not displaying and it is overlapping woht report-zip*/}
        <h1 className="zip-title"></h1>
        <h1 className="report-zip">{props.valueLeft}</h1>
      </section>

      {props.plan ? (
        <section className="analysis-section">
          <div style={{ backgroundColor: "white" }} className="pipe-up"></div>
          <div style={{ backgroundColor: "white" }} className="pipe-down"></div>
          <div className="main-circ-box">
            <div style={{ border: "15px solid #ffffff" }}className="inner-circle"></div>
          </div>
          <div className="report-img-box">
            <img
              src={props.centerImg}
              alt="location-illustration"
              className="report-img"
            />
          </div>
          <div className="left-img">
            <img 
              src={hurry} 
              alt="tall-man" 
              className="hurry-img" />
          </div>

          <div className="result-info-1">
            <h1 className="repo-title">This is the amount you have to save each month</h1>
            {/* <h1 className="saving">information</h1> */}
            <h1 className="saving"></h1>
            <h1 className="repo-title">monthly for</h1>
             <h1 className="saving">{final.monthly_savings}</h1>
          </div>

          <div className="year-buttons">
              <div className="year-ci">year 1</div>
              <div className="year-ci">year 2</div>
              <div className="year-ci">year 3</div>
          </div>


          <div className="result-info-2">
            <h1 className="repo-title">Your DreamHome</h1>
            <h1 className="repo-title">ready to buy</h1>
            <h1 className="repo-title">{currentStyle}</h1>
            <h1 className="saving">{final.goal_end_date}</h1>
            {/* <h1 className="saving">{moment().to(currentPlan.goal_end_date)} </h1> */}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
