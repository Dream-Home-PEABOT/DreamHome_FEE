import React, {useRef, useState}  from 'react';

  interface Props{
    handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }

  export const Question: React.FC<Props> = ({handleClick}) => {
  const [answerInput, updateAnswer] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={inputRef} onChange={(e)=>updateAnswer(e.target.value)}/>
      <button onClick={(e)=>handleClick(answerInput)}></button>
    </div>
  );
};

