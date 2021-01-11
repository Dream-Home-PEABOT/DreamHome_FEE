import React, {useEffect, useContext} from 'react'
import { Link, Redirect, useHistory} from 'react-router-dom';
import {ReportContext} from '../../types'
import {getReport} from '../../apiCalls'
import './GenerateReport.css'
import calculate_img from '../../images/calculate/Big Shoes - Sitting On Floor.png'
import back_img from '../../images/calculate/Charco - Security.png'

interface Props{
  updateReport: any;
}

const GenerateReport: React.FC<Props> = ({ updateReport}) => {
  const history = useHistory()
  const report = useContext(ReportContext)

  const requestReport = () =>{
    getReport().then((data) => setTimeout(() => updateReport(data), 10000))
  }


  

  return (
    <section className='generate-section'>
      <div className='inner-container'>

      <div className='desc-container'>

          <div className="description-box">
            <h1 className="question-desc">Yearly Salary After Taxes</h1>
            <h2 className='desc'>"Gross income is the total amount you earn (typically over the course of a year) before expenses. Net income is the profit your business earns after expenses .</h2>
            <h2 className='desc'>"Gross income is the total amount you earn (typically over the course of a year) before expenses. Net income is the profit your business earns after expenses .</h2>
          </div>
        </div>

        <div className='question_img-box_1'>
          <img src={calculate_img} alt="" className='question_img'/>
        </div>

        <div className='question_img-box_2'>
          <img src={back_img} alt="" className='location_img'/>
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
