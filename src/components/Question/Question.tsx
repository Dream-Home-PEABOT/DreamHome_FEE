import React, { useState}  from 'react';

  interface Props{
    updateAllAnswers: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  export const Question: React.FC<Props> = ({updateAllAnswers}) => {
    const [answerInput, updateAnswer] = useState<any>({question: '', answer: ''});
  return (
    <div>
      <input onChange={(e)=>updateAnswer({...answerInput, answer: e.target.value})}/>
      <button onClick={()=>updateAllAnswers(answerInput)}></button>
    </div>
  );
};

