import React, {useEffect, useContext, useState} from 'react';
import {AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  const thisContext = useContext(QuestionContext)
  const [answerKey, updateAnswers] = useState<any>();
  let theseKeys: [];
  useEffect(() => {
    if (thisContext) {
      theseKeys = Object.keys(thisContext).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
    }
    updateAnswers(theseKeys)
  }, []);
  return (
    <AnswerContext.Provider value={answerKey}>
      <div>
        <Question />
      </div>
     </AnswerContext.Provider>
  );
};

