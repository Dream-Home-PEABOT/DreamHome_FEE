import React, {useEffect, useContext, useState} from 'react';
import {AllQuestionFormat, AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';
import './Survey.css'
import bkg_img_2 from '../../images/survey/Big Shoes - Sitting on Rock Blue.png'
import bkg_img_1 from '../../images/survey/Big Shoes - Sitting on Rock Yellow.png'
export const Survey: React.FC = () => {
  const thisContext = useContext(QuestionContext)
  const [answerKey, updateAnswers] = useState<AllQuestionFormat | null>(null);
  let questionKeys: null;
  useEffect(() => {
    if(thisContext){
    questionKeys = Object.keys(thisContext).reduce((acc: any,cur)=>{
        acc[cur] = ''
        console.log(acc)
        return acc
      },{})
    updateAnswers(questionKeys)
    }
  }, [thisContext]);
  
  return (
    <AnswerContext.Provider value={answerKey}>
      <section className='survey-container'>
        {/*<Question currentQuestion={currentQuestion} updateAllAnswers={updateAllAnswers}/> */}
        <div className='inner-container'>

          <div className='info-container'>
            <div className="info-box">
              <h2 className='info'>One of the main questions to answers is how much can I afford?. Affordability is defined as the cost of something.</h2>
            </div>
          </div>

          <div className="shadow-box"></div>

          <div className='img-box_1'>
            <img src={bkg_img_1} alt="" className='img'/>
          </div>

          <div className='img-box_2'>
            <img src={bkg_img_2} alt="" className='img'/>
          </div>
          <div className='floor-box'></div>

          <div className="survey-btn">
            <button className="btn">Start</button>
          </div>

          <div className="survey-box">
            <div className="survey">
              <p className="content">While every person’s situation is different (and some loans may have different guidelines), here are the generally recommended guidelines based on your gross monthly income (that’s before taxes):
                Your mortgage payment should be 28% or less.
                Your debt-to-income ratio (DTI) should be 36% or less.
                Your housing expenses should be 29% or less. This is for things like insurance, taxes, maintenance, and repairs.
                You should have three months of housing payments and expenses saved up.
                </p>
              </div>
          </div>
        </div>
      </section>
     </AnswerContext.Provider>
  );
};

export default Survey;
