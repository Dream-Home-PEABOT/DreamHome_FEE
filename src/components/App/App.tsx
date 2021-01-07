import React, {useState, useContext, useEffect} from 'react';
import {QuestionContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls'

//components
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Journey from '../Journey/Journey';
import Survey from '../Survey/Survey';
// import Error from '../Error/Error';
// import GenerateReport from '../GenerateReport/GenerateReport';

//create interface for context

const App:React.FC = () =>{
  const [questions, updateQuestions] = useState<AllQuestionFormat | null>(null);
  useEffect(() => {
    getQuestions().then((data) => updateQuestions(data))
  }, []);

  return (
    <QuestionContext.Provider value={questions}>
     
        <NavBar />
        <Home />
        <Journey />
        <Survey />
      
     </QuestionContext.Provider>
  );
}
export default App;

