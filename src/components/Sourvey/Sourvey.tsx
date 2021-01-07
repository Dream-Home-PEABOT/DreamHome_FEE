import React, {useEffect, useContext, useState} from 'react';
import {AllQuestionFormat, AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  const thisContext = useContext(QuestionContext)
  const [answerKey, updateAnswers] = useState<AllQuestionFormat | null>(null);
  let questionKeys: null;
  useEffect(() => {
    if (thisContext) {
      questionKeys = Object.keys(thisContext).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
    }
    updateAnswers(questionKeys)
  }, []);
  return (
    <AnswerContext.Provider value={answerKey}>
      <div>
        <Question />
      </div>
     </AnswerContext.Provider>
  );
};

