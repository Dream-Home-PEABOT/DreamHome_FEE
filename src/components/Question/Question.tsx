import React, { useState, useContext}  from 'react';
import {AnswerContext} from '../../types';

  interface Props{
    updateAllAnswers: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    currentQuestion: string;
  }

  export const Question: React.FC<Props> = ({updateAllAnswers, currentQuestion}) => {
    const answerContext = useContext(AnswerContext)
    const [answerInput, updateAnswer] = useState<any>({question: '', answer: ''});
  return (
    <div>
      Question: {currentQuestion}
      <input onChange={(e)=>updateAnswer({...answerInput, answer: e.target.value})}/>
      <button onClick={()=>updateAllAnswers({...answerInput})}></button>
    </div>
  );
};

