import React, { useContext, useRef } from "react";
import { ReportContext } from "../../helpers/context";
import { Spring } from "react-spring/renderprops";
import back_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";
import { ReportCategory } from "../ReportCategory/ReportCategory";
import goodJob from "../../images/report/Charco - Inbox.png";
import downpayment from "../../images/report/Charco - Work at Home.png";
import location from "../../images/report/Charco - Location Map.png";
import mobile from "../../images/report/Charco - Mobile Life.png";
import plant_1 from "../../images/extras/Fancy Plants - Solo Plant.png";
import plant_2 from "../../images/extras/Fancy Plants - Solo Plant copy.png"
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link } from 'react-router-dom'
import "firebase/auth";


export const ReportSecOne = () => {

  const reportContext: any = useContext(ReportContext);
  const keys = Object.keys(reportContext.output);
  const categories = keys.map(category => category.split('_')[1]);
  const insight = keys.map(category => reportContext.output[category]?.information);
  const planStyles =  reportContext.output.D_downpayment.plan_style
  const planKeys = Object.keys(planStyles);

  const savePDF = () => {
    const input:any = document.getElementById('root');
    html2canvas(input, {scrollY: -window.scrollY}).then(function(canvas) {
            var img = canvas.toDataURL();
            const pdf = new jsPDF({unit:"px", format:[180,300]});
            pdf.setFillColor(240, 200,8);
            pdf.rect(0, 0, 150, 300, "F");
            pdf.rect(150, 0, 150, 300, "F");
            pdf.addImage(img, 'PNG', 15, 0, 150, 300);
            pdf.save("MyDreamHome.pdf");
        });
  }

  const injectNumbers = () => {
    const numbersToDisplay = [
      "B_credit_score",
      "C_salary",
      "D_monthly_debt",
      "F_mortgage_term",
      // 'G_downpayment_percentage'
    ];
    let numbers = numbersToDisplay.reduce((acc: any, curr) => {
      acc[curr] = reportContext.input[curr];
      return acc;
    }, {});

    return Object.entries(numbers).map((entries: any, i) => {
      const numTitle = entries[0].split("_").splice(1).join(" ");
      return (
        <div 
          key={i}
          className="num ">
          <div className="num-ci-box-up">
            <h1 className="num-ci-title">Your {numTitle}</h1>
          </div>
          <Spring
            config={{ delay: 100, duration: 1000 }}
            from={{ number: 0 }}
            to={{ number: entries[1] }}
          >
            {(props) => (
              <div className="num-ci-box-down">
                { entries[0] !=="F_mortgage_term"?
                  <h1 className="num-ci-data">{`$${props.number.toFixed()}`}</h1>
                  :
                  <h1 className="num-ci-data">{`${props.number.toFixed()} year`}</h1>

                }
              </div>
            )}
          </Spring>
        </div>
      );
    });
  };
  return (
    <>
      <section  id="report-id" className="report-section">
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
          <div className="report-numbers-box">{injectNumbers()}</div>
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
        position={keys.indexOf(keys[0]) + 1}
        centerImg={location}
        plant={plant_1}
        valueOne={reportContext.output.A_location.city_state}
        valueLeft={reportContext.output.A_location.zipcode}
        valueRightTitle={"Average Home Price in this Area"}
        valueRight={`$${reportContext.output.A_location.average_home_price}`}
      />
      {/* Principal */}
      {!reportContext.input.I_rent
      ?
      (<ReportCategory
        title={categories[1]}
        insight={insight[1]}
        position={keys.indexOf(keys[1]) + 1}
        centerImg={goodJob}
        plant={plant_2}
        valueOne={"Mortgage Rate"}

        valueLeft={`${reportContext.output.B_principal.mortgage_rate * 100}%`}
        valueRightTitle={"Your Selected Goal Principle"}

        valueRight={`$${reportContext.output.B_principal.goal_principal}`}
      />)
      :
        (<ReportCategory
        title={"Principal Based on Rent"}
        insight={insight[1]}
        position={keys.indexOf(keys[1]) + 1}
        centerImg={goodJob}
        plant={plant_2}

        valueOne={"Your current rent"}
        valueLeft={`$${reportContext.I_rent}`}
        valueRightTitle={
          "Possible principle"

        }
        valueRight={`$${reportContext.output.B_principal.principal_based_on_rent}`}
      />)
      }

      {/* monthly category */}
      <ReportCategory
        title={categories[2]}
        position={keys.indexOf(keys[2]) + 1}
        insight={insight[2]}
        centerImg={mobile}
        valueOne={"Estimated True Monthly"}
        valueLeft={`$${reportContext.output.C_monthly.estimated_true_monthly}`}
        valueRightTitle={"Monthly Principal"}
        valueRight={`$${reportContext.output.C_monthly.monthly_principal}`}
        pmi={reportContext.output.C_monthly.pmi_by_location}
        taxes={reportContext.output.C_monthly.property_tax_by_location}
        insurance={reportContext.output.C_monthly.home_insurance_by_location}
      />
      {/* downpayment */}
      <ReportCategory
        plan={planStyles}
        title={'Plans'}
        insight={insight[3]}
        position={keys.indexOf(keys[3]) + 1}
        centerImg={downpayment}
        plant={plant_2}
        valueOne={"Downpayment saved"}
        valueLeft={`$${reportContext.output.D_downpayment.downpayment_saved}`}
        valuePLanTitleOne={"Downpayment cash value"}
        valuePlanValueOne={`$${reportContext.output.D_downpayment.downpayment_cash_value}`}
        valuePLanTitleTwo={"Downpayment Cash Value"}
        valuePlanValueTwo={`${reportContext.output.D_downpayment.downpayment_percentage_selected}%`}
        planKeys={planKeys}

      />

        <div className="sigup">
        {localStorage.userUID ? (
          <div className="social-box">
            <h1 className="fina-mess">
              Tweet your report! <br />
              <a
                className="tweet"
                href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/geW2LkzIZr "
                data-size="large"
              >
                Tweet
              </a>
            </h1>
            <h1 className="fina-mess">
              Download as PDF
              <br />
              <span onClick={()=> savePDF()} className="tweet">Download</span>
            </h1>
          </div>)

          : (
            <div className="social-box">
            <h1 className="">
              Save your report by logging in<br />
              <Link to='/login'>
              <a
                className="tweet"
              >
                log-in
              </a>
              </Link>
            </h1>
            <h1 className="">
              Download as PDF
              <br />
              <s onClick={()=> savePDF()} className="tweet">Download</s>
            </h1>
          </div>
          )
        }
      </div>


    </>
  );
};
