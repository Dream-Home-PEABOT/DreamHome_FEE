//imports
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AnswerContext, Answers } from '../../types';
// import { getReport, postAnswers} from '../../apiCalls'
import './GenerateReport.css'
import calculate_img from '../../images/calculate/Big Shoes - Sitting On Floor.png'
import back_img from '../../images/calculate/Charco - Security.png'

interface Props{
  updateReport: any;
}

const GenerateReport: React.FC<Props> = ({ updateReport }) => {

  const answers = useContext(AnswerContext);

  const requestReport = async () =>{
    // const formattedAnswers: Answers = {
    //   salary: answers.annual_salary,
    //   zipcode: answers.zip_code,
    //   credit: answers.credit_score,
    //   monthly_debt: answers.monthly_debt,
    //   downpayment_savings: answers.downpayment_savings,
    //   downpayment_percentage:answers.downpayment_percentage,
    //   rent: answers.rent,
    //   goal_principal: answers.goal_home_price
    // };
    // //will need to add default values in or statements
    // // const id = await postAnswers(formattedAnswers)
    // // const data = await getReport()
    // // updateReport(data)
    // getReport().then((data) => setTimeout(() => updateReport(data), 3000))
  }

  return (
    <section className='generate-section'>
      <div className='inner-container'>

      <div className='desc-container'>

          <div className="description-box">
            <h1 className="question-desc">Yearly Salary After Taxes</h1>
            <h2 className='desc'>"There’s no single answer to the question “Should I rent or buy?” Your solution depends on where you live, whether renting or buying an equivalent home is cheaper, and on additional assumptions you can include in your analysis</h2>
            <h2 className='desc'>Don't worry we will calculate everything for you</h2>
          </div>
        </div>

        <div className='question_img-box_1'>
          <img src={calculate_img} alt="teki-sitting" className='question_img'/>
        </div>

        <div className='question_img-box_2'>
          <img src={back_img} alt="background-graphics" className='location_img'/>
        </div>

        <div className="buttons-box">
          <Link to="/report">
          <button className='submit-btn btn'
            onClick={requestReport}>
          Generate Report</button>
          </Link>
        </div>

        <div className="box-detail-1"></div>
        <div className="box-detail-2"></div>

      </div>
    </section>
  )
}

export default GenerateReport;
