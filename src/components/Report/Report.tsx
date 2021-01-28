import React, { useContext } from "react";
import { ReportContext, AnswerContext } from "../../helpers/context";
import { Cube } from "../Cube/Cube";
import "./Report.css";
import { ReportCategory } from "../ReportCategory/ReportCategory";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import back_img from "../../images/report/Big Shoes - Jumping On One leg Pose.png";

const Report = () => {
  let userReport = useContext(ReportContext);
  let userAnswers = useContext(AnswerContext);

  const displayAnalysisSections = () => {
    
    const reportData = Object.keys(userReport).reverse();

    return reportData.map((data, key) => {
      let subtitle_1 = Object.keys(userReport[data])[0].replace(/_|\-/g, " ");
      let subtitle_2 = Object.keys(userReport[data])[2].replace(/_|\-/g, " ");
      if (key === 0 || key === 1) {
        subtitle_1 = Object.keys(userReport[data])[3].replace(/_|\-/g, " ");
        subtitle_2 = Object.keys(userReport[data])[1].replace(/_|\-/g, " ");
      }
      if (key === 0) {
        subtitle_1 = Object.keys(userReport[data])[3].replace(/_|\-/g, " ");
      }
      if (data === "principal") {
        userReport.principal.goal_principal = userReport[data].goal_principal
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        userReport.principal.based_on_rent = userReport[data].based_on_rent
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      if (data === "monthly") {
        userReport.monthly.estimated_true_monthly = userReport[
          data
        ].estimated_true_monthly
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        userReport.monthly.monthly_principal = userReport[
          data
        ].monthly_principal
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      return (
        <ReportCategory
          position={key + 1}
          key={key}
          plan={userReport[data].ten_year_plan}
          categoryName={[data]}
          information={userReport[data].information}
          categoryMainNumber={
            (userReport[data].monthly_principal &&
              `$${userReport[data].monthly_principal}`) ||
            userReport[data].zipcode ||
            (userReport[data].downpayment_percent_saved &&
              `%${userReport[data].downpayment_percent_saved}`) ||
            (userReport[data].mortgage_rate &&
              `%${userReport[data].mortgage_rate}`)
          }
          categoryMainTitle={subtitle_1}
          categorySubtitle={subtitle_2}
          categorySecondNumber={
            (userReport[data].estimated_true_monthly &&
              `$${userReport[data].estimated_true_monthly}`) ||
            userReport[data].city_state ||
            (userReport[data].downpayment_percent_saved &&
              `%${userReport[data].downpayment_percent_saved}`) ||
            (userReport[data].goal_principal &&
              `$${userReport[data].goal_principal}`)
          }
          categoryID={key + 1}
        />
      );
    });
  };

  return (
    <>
      {!userReport ? (
        <>
          <div className="loading-box">
            <h1 className="loading-message-1">
              we are building you a report...
            </h1>
          </div>
          <div className="loading-box">
            <h1 className="loading-message-2">just a second...</h1>
          </div>
          <Cube />
        </>
      ) : (
        <>
          <section className="report-section">
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
                    <h1 className="num-ci-title">Ten year goal </h1>
                  </div>
                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{
                      number:
                        userReport.downpayment.ten_year_plan[10]
                          .monthly_savings,
                    }}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">{`$${props.number.toFixed()}/ mo`}</h1>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Downpayment %</h1>
                  </div>
                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{
                      number:
                        userReport.downpayment.downpayment_percentage_selected,
                    }}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">
                          {props.number.toFixed()}
                        </h1>
                      </div>
                    )}
                  </Spring>
                </div>{" "}
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Downpayment saved</h1>
                  </div>

                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{ number: userReport.downpayment.downpayment_saved }}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">{`${props.number.toFixed()}`}</h1>
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
                    to={{ number: userAnswers.mortgage_term }}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">
                          {`${props.number.toFixed()}yrs`}
                        </h1>
                      </div>
                    )}
                  </Spring>
                </div>
                <div className="num ">
                  <div className="num-ci-box-up">
                    <h1 className="num-ci-title">Monthly income </h1>
                  </div>

                  <Spring
                    config={{ delay: 100, duration: 1000 }}
                    from={{ number: 0 }}
                    to={{ number: userAnswers.annual_salary }}
                  >
                    {(props) => (
                      <div className="num-ci-box-down">
                        <h1 className="num-ci-data">{`$${props.number.toFixed()}`}</h1>
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

          {displayAnalysisSections()}

          <div className="sigup">
            <h1 className="fina-mess">
              Sign-up
              <Link to="/home">
                <span className="link">here</span>
              </Link>
              if you want to know more...
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Report;
