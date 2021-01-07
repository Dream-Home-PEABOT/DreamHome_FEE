import React, {useState, useContext, useEffect} from 'react';
import {QuestionContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls'

//components
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Journey from '../Journey/Journey';
// import Error from '../Error/Error';
// import Sourvey from '../Sourvey/Sourvey';
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
      
     </QuestionContext.Provider>
  );
}
export default App;

