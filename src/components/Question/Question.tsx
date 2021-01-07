import React, {useState}  from 'react';

  interface Props{
    updateAnswers: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  export const Question: React.FC<Props> = ({updateAnswers}) => {
  const [answerInput, updateAnswer] = useState<any>(null);
  return (
    <div>
      <input  onChange={(e)=>updateAnswer(e.target.value)}/>
      <button onClick={()=>updateAnswers(answerInput)}></button>
    </div>
  );
};

