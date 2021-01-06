import React, {useContext} from 'react';
import {QuestionContext} from '../../types';

export const Home: React.FC = () => {
  let thisContext = useContext(QuestionContext)
  console.log(thisContext)
  return (
    <div>
      {"hi"}
    </div>
  );
};

