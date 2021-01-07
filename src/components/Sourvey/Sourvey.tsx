import React, {useEffect, useContext, useState} from 'react';
import {AllQuestionFormat, AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  const thisContext = useContext(QuestionContext)
  const [answerKey, updateAllAnswers] = useState<any>(null);
  useEffect(() => {
    if(thisContext){
    let questionKeys = Object.keys(thisContext).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
    updateAllAnswers(questionKeys)
    }
  }, [thisContext]);
  return (
    <AnswerContext.Provider value={answerKey}>
      <div>
        <Question updateAllAnswers={updateAllAnswers}/> 
      </div>
     </AnswerContext.Provider>
  );
};

