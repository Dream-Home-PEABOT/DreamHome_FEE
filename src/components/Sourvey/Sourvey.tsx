import React, {useEffect, useContext, useState} from 'react';
import {AllQuestionFormat, AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  const questionContext = useContext(QuestionContext)
  const [answerKey, updateAllAnswers] = useState<any>(null);
  let currentQuestion: any;
  useEffect(() => {
    if(questionContext){
    let questions = Object.keys(questionContext)
    let questionKeys = questions.reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
    updateAllAnswers(questionKeys)
    }
  }, [questionContext]);
  if (answerKey && questionContext){
    currentQuestion = Object.keys(questionContext).find(question => !answerKey[question])
  }
  console.log(answerKey)
  return (
    <AnswerContext.Provider value={answerKey}>
      <div>
        <Question currentQuestion={currentQuestion} updateAllAnswers={updateAllAnswers}/> 
      </div>
     </AnswerContext.Provider>
  );
};

