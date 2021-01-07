import React  from 'react';
import './Question.css'
import bkg_img from '../../images/questions/Big Shoes - Sitting On Floor.png'
import location_img from '../../images/questions/Charco - Location Map.png'
export const Question: React.FC = () => {
  return (
    <section className='question-section'>
      
      <div className="inner-container">

        <div className='desc-container'>
          <div className="description-box">
            <h1 className="question-desc">Yearly Salary After Taxes</h1>
            <h2 className='desc'>"Gross income is the total amount you earn (typically over the course of a year) before expenses. Net income is the profit your business earns after expenses .</h2>
            <h2 className='desc'>"Gross income is the total amount you earn (typically over the course of a year) before expenses. Net income is the profit your business earns after expenses .</h2>
          </div>
        </div>
        
        <div className='question_img-box_1'>
          <img src={bkg_img} alt="" className='question_img'/>
        </div>

        <div className='question_img-box_2'>
          <img src={location_img} alt="" className='location_img'/>
        </div>

        <div className="buttons-box">
          <button className='back-btn btn'>back</button>
          <button className='next-btn btn'>next</button>
        </div>

        <div className="question-box">
          <h1 className="question">What is your net monthly salary?</h1>
        </div>
        <div className="input-box">
          <input type="text" className="input"/>
        </div>
        <div className="note-box">
          <h4 className="note">The amount of money you earn plays a smaller role in getting a mortgage than you might think.</h4>
        </div>

      
          <div className='floor-box'></div>
      </div>
    </section>
  );
};

export default Question
