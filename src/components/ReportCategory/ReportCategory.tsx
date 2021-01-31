import React, {useState , useContext} from 'react';
import downpayment from "../../images/report/Charco - Work at Home.png";
import hurry from "../../images/report/Big Shoes - Dynamic Pose.png";
import { ReportContext } from "../../helpers/context";

export const ReportCategory = (props: any) => {

  let userReport = useContext(ReportContext);
  userReport = userReport["03_attributes"]

  const [currentStyle, setCurrentStyle] = useState<string>('med_savings_plan');
  const [currentPlan, setCurrentPlan] = useState<string>('plan_2');
  let plan = userReport.output.D_downpayment.plan_style;
  let final = plan[currentStyle]

  const injectYears = () => {
    const yearKeys = Object.keys(plan[currentStyle]).splice(0, 3)
    return yearKeys.map(plan => {
      console.log(plan)
      const split = plan.split('_')
      return (
        <div 
          id={plan}
          onClick={(e) => updateYear(e)}
          className="year-ci">
            <h1 id={plan} className="year-title">{`${final[plan].number_of_years}`} </h1>
            <h1  id={plan} className="year-title">{`year ${split[0]}`} </h1>
        </div>)
    })
  }


  const updateYear = (e: any) => {
    const id = e.target.id
    setCurrentPlan(id)
    console.log(id)
  }

  const updatePlan =(e: any) => {
    const id = e.target.id
    setCurrentStyle(id)
  }

  const injectPlan = ()=> {
    if (plan && props.planKeys){
      const result = props.planKeys.map((planName: string, i: number) => {
        return (
          <div 
            onClick={(e) => updatePlan(e)}
            key={i} 
            className='repo-title'
            id={planName}>
              {/* <div id={planName} className="down-ci ">{plan[planName].savings_style_percentage}%</div> */}
              <div id={planName} className="down-ci ">{planName.split('_')[0]+ " " + 'savings' + " " + planName.split('_')[2] + " " + plan[planName].savings_style_percentage }%</div>
              
          </div>
        )
      });
      return result
    }
  }

  return (
    <>
      <section         style={props.position % 2 === 0 ? { backgroundColor: "#ffffff" } : {}}
        className="analysis-section"
      >
        <div 
        style={props.position % 2 === 0? { backgroundColor: "#89BD9E" }: { backgroundColor: "#ffffff" }}className="pipe-up"></div>
        <div
          style={ props.position % 2 === 0? { backgroundColor: "#89BD9E" }: { backgroundColor: "#ffffff" }}className="pipe-down"></div>
        <div className="main-circ-box">
          <div style={props.position % 2 === 0? { border: "15px solid #89BD9E" }: { border: "15px solid #ffffff" }}className="inner-circle"></div>
        </div>
        <div  className="report-img-box">
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
              <h1 className="inst-title">Choose your plan style option and see the savings percetage associated to it.</h1>
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
        <section
          ref={props.pdfRef} 
          className="analysis-section">
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
          {/* <div className="left-img">
            <img 
              src={hurry} 
              alt="tall-man" 
              className="hurry-img" />
          </div> */}
           <div className="result-info-2">
            <h1 className="saving">With a <span className='light'>{currentStyle.split('_').join(' ')}</span></h1>
            <h1 className="saving">of <span className='light'>{final[currentPlan].number_of_years} years</span></h1>
            <h1 className="saving">Your Dream Home</h1>
            <h1 className="saving">ready to buy date would be</h1>
            <h1 className="saving"><span className='light'>{final[currentPlan].goal_end_date}</span></h1>
          </div>

         
          <div className="year-buttons">
              {injectYears()}
          </div>
          <div className="btns-inst">
              <h1 className="inst-title">Now, here you can adjust your savings by year and choose the plan that is right for you</h1>
            </div> 

            <div className="result-info-1">
            <h1 className="saving">And you will only</h1>
            <h1 className="saving"> have to save </h1>
            <h1 className="saving"><span className='light'>${plan[currentStyle][currentPlan].monthly_savings}.00</span> monthly</h1>
          </div>

        </section>
      ) : (
        ""
      )}
    </>
  );
};
