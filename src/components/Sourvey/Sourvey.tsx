import React, {useContext, useState} from 'react';
import {AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  let thisContext = useContext(QuestionContext)
  let theseKeys = thisContext ? Object.keys(thisContext): null;
  console.log(theseKeys)
  const [answerKey, updateAnswers] = useState();
  return (
    <AnswerContext.Provider value={[]}>
      <div>
        <Question />
      </div>
     </AnswerContext.Provider>
  );
};

