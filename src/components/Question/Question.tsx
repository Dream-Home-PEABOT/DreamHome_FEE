import React, { useState, useContext, useEffect}  from 'react';
import { Link } from 'react-router-dom';
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

    //local state
    const [answerInput, updateAnswer] = useState<any>({});
    const [index, setIndex] = useState<number>(0);
    // const[error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    let currentQuestion = questionContext[questionSet[index]]

    // const nextQuestion = () => {
    //   console.log(answerInput[questionSet[index]])
    //   if(!answerInput[questionSet[index]]) {
    //     setError(true);
    //     setErrorMessage('Sorry but we need this information')
    //     setTimeout(()=> setError(false), 2500)
    //   } else if(index < questionSet.length && answerInput[questionSet[index]]) {
    //     setIndex(prevIndex => prevIndex + 1);
    //     setError(false)
    //   }
    // }

    const nextQuestion = () => {
  
        console.log('next')
        setErrorMessage(!answerInput[questionSet[index]] ? 'Sorry but we need this information' : '')
        setIndex(index < questionSet.length && answerInput[questionSet[index]] ? index + 1 :  index);
  
      
    }

    const prevQuestion = () => {
      setIndex(index - 1)
    }


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

        {errorMessage && <div className='error_box'>
          <h3 className='error-input'>{errorMessage}</h3>
        </div>}

        <div className="buttons-box">
          <div className="bx">
            <button className={index === 0 ? 'hidden' : 'back-btn btn'}
              onClick={() => {prevQuestion()}}>back</button>
          </div>
          <div className="bx">
            {questionSet.indexOf(questionSet[index]) !== questionSet.length - 1 
            ? <button className='next-btn btn'
              onClick={() => {nextQuestion()}}>
                next</button> 
            :
              <Link to="/generate_report">
                <button className='next-btn btn'
                  onClick={() => {updateAllAnswers(answerInput)}}>
                    next</button>
              </Link>}
          </div>
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
 