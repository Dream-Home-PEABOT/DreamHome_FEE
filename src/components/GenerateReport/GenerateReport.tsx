import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AnswerContext } from "../../helpers/context";
import { Answers } from "../../helpers/types";
import { getReport, postAnswers } from "../../helpers/apiCalls";
import "./GenerateReport.css";
import calculate_img from "../../images/calculate/Big Shoes - Sitting On Floor.png";
import back_img from "../../images/calculate/Charco - Security.png";

interface Props {
  updateReport: any;
}

const GenerateReport: React.FC<Props> = ({ updateReport }) => {
  const answers = useContext(AnswerContext);

  const requestReport = async () => {
    const formattedAnswers: Answers = {
      salary: answers.monthly_salary,
      zipcode: answers.zip_code,
      credit_score: answers.credit_score,
      monthly_debt: answers.monthly_debt,
      downpayment_savings: answers.downpayment_savings,
      downpayment_percentage: answers.downpayment_percentage,
      rent: answers.rent,
      goal_principal: answers.goal_home_price,
    };

    console.log(formattedAnswers)
    //will need to add default values in or statements
    const id = await postAnswers(formattedAnswers);
    const data = await getReport(id.data.confirmation.id);
    updateReport(data);
    //getReport().then((data) => setTimeout(() => updateReport(data), 3000))
  };

  return (
    <section className="generate-section">
      <div className="inner-container">
        <div className="desc-container">
          <div className="description-box">
            <h1 className="question-desc">Let's See Your Report!</h1>
            <h2 className="desc">
              This report will give you information that will help you
              understand what steps you need to take to be on the right path to
              your Dream Home, or give you an idea of what your goals could look
              like on your current path. Click the button and let's do some
              calculations!
            </h2>
            <h2 className="desc">
              Click the link at the bottom of your report to register and track
              your progress over time.
            </h2>
          </div>
        </div>

        <div className="question_img-box_1">
          <img
            src={calculate_img}
            alt="teki-sitting"
            className="question_img"
          />
        </div>

        <div className="question_img-box_2">
          <img
            src={back_img}
            alt="background-graphics"
            className="location_img"
          />
        </div>

        <div className="buttons-box">
          <Link to="/report">
            <button className="submit-btn btn" onClick={requestReport}>
              Generate Report
            </button>
          </Link>
        </div>

        <div className="box-detail-1"></div>
        <div className="box-detail-2"></div>
      </div>
    </section>
  );
};

export default GenerateReport;
