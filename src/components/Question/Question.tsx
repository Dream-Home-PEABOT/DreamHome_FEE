import React, { useState, useContext}  from 'react';
import {QuestionContext, AnswerContext} from '../../types';
import './Question.css'
import bkg_img from '../../images/questions/Big Shoes - Sitting On Floor.png'
import location_img from '../../images/questions/Charco - Location Map.png'

interface Props{
  updateAllAnswers: any;
}
    export const Question: React.FC<Props> = ({updateAllAnswers}) => {

    const answerContext = useContext(AnswerContext)
    const questionContext = useContext(QuestionContext)
    const questionSet = Object.keys(questionContext);
    const [answerInput, updateAnswer] = useState<any>({});

    let [index, setIndex] = useState<any>(0);
    // const [question, setQuestion] = useState<any>(questionSet[0]);

    let currentQuestion = questionContext[questionSet[index]]

    const nextQuestion = () => {
      if(index < questionSet.length) {
        setIndex(index + 1);
        console.log(index)
        // let initQuestion = questionSet.find(question => questionContext[question].attributes.question_id == index)
        // setQuestion(initQuestion);
          // console.log(initQuestion);
      }
      // updateAllAnswers({...answerContext, [questionSet[index]]: answerInput.answer})
    }

    const clearInput = () => {

    }

    const prevQuestion = () => {
      setIndex(index - 1)
      // setQuestion(questionSet[index]);
      // console.log(index)
      // console.log(questionSet)
    }


    // let currentAnswer = Object.keys(answerContext).find(question => answerContext[question])


    // console.log(currentAnswer)
    return (
      <section className='question-section'>

        <div className="inner-container">

          <div className='desc-container'>
            <div className="description-box">
              <h1 className="question-desc">{currentQuestion?.attributes?.classification}</h1>
              <h2 className='desc'>{currentQuestion?.attributes?.description}</h2>
              <h2 className='desc'>{currentQuestion?.attributes?.information}</h2>
            </div>
          </div>

        <div className='question_img-box_1'>
          <img src={bkg_img} alt="" className='question_img'/>
        </div>

        <div className='question_img-box_2'>
          <img src={location_img} alt="" className='location_img'/>
        </div>

        <div className="buttons-box">
          {index !== 0 && <button className='back-btn btn' onClick={() => {prevQuestion()}}>back</button>}
          <button className='next-btn btn'
            onClick={() => {nextQuestion()}}
          >next</button>
        </div>

        <div className="question-box">
          <h1 className="question">{currentQuestion?.attributes?.question}</h1>
        </div>
        <div className="input-box">
          <input type="text" className="input" value={answerInput[questionSet[index]] || ''}
          onChange={(e)=>updateAnswer({...answerInput, [questionSet[index]]: e.target.value})}
          />
        </div>
        <div className="note-box">
          <h4 className="note">{currentQuestion?.attributes?.note}</h4>
        </div>

          <div className='floor-box'>
          <h4 className="note">{currentQuestion?.attributes?.source}</h4>
          </div>
      </div>
    </section>
  );
};

export default Question
