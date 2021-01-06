import React, {useContext} from 'react';
import {AnswerContext, QuestionContext} from '../../types';
import {Question} from '../Question/Question';


export const Sourvey: React.FC = () => {
  let thisContext = useContext(QuestionContext)
  console.log(thisContext)
  return (
    <AnswerContext.Provider value={[]}>
      <div>
        <Question />
      </div>
     </AnswerContext.Provider>
  );
};

