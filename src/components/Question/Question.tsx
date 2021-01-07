import React, { useState, useContext}  from 'react';
import {QuestionContext, AnswerContext} from '../../types';

  interface Props{
    updateAllAnswers: any;
    currentQuestion: string;
  }

  export const Question: React.FC<Props> = ({updateAllAnswers, currentQuestion}) => {
    const answerContext = useContext(AnswerContext)
    const questionContext = useContext(QuestionContext)
    console.log(questionContext)
    const [answerInput, updateAnswer] = useState<any>({question: '', answer: ''});
  return (
    <div>
      Question: {currentQuestion}
      <input onChange={(e)=>updateAnswer({...answerInput, answer: e.target.value})}/>
      <button onClick={()=>updateAllAnswers({...answerContext, [currentQuestion]: answerInput.answer})}></button>
    </div>
  );
};

