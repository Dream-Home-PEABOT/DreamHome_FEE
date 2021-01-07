import React, {useState, useContext, useEffect} from 'react';
import {QuestionContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls'

//components
import Home from '../Home/Home';
//import Error from '../Error/Error';
//import Journey from '../Journey/Journey';
import {Survey} from '../Survey/Survey';
//import GenerateReport from '../GenerateReport/GenerateReport';
//import './App.css';

//create interface for context

const App:React.FC = () =>{
  const [questions, updateQuestions] = useState<AllQuestionFormat | null>(null);
  useEffect(() => {
    getQuestions().then((data) => updateQuestions(data))
  }, []);

  return (
    <QuestionContext.Provider value={questions}>
      <div>
        <Home />
        <Survey />
      </div>
     </QuestionContext.Provider>
  );
}
export default App;
