import React, {useState, useContext, useEffect} from 'react';
import {QuestionContext, QuestionFormat} from '../../types'
import {getUserSkins} from '../../apiCalls'

//components
import {Home} from '../Home/Home';
//import Error from '../Error/Error';
//import Journey from '../Journey/Journey';
import {Sourvey} from '../Sourvey/Sourvey';
//import GenerateReport from '../GenerateReport/GenerateReport';
//import './App.css';

//create interface for context

const App:React.FC = () =>{
  const [questions, updateQuestions] = useState<QuestionFormat | null>(null);
  useEffect(() => {
    getUserSkins().then((data) => updateQuestions(data))
  }, []);

  return (
    <QuestionContext.Provider value={questions}>
      <div>
        <Home />
        <Sourvey />
      </div>
     </QuestionContext.Provider>
  );
}

export default App;
