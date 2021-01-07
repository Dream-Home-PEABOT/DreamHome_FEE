import React, {useState, useContext, useEffect} from 'react';
import {QuestionContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls'

//components
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Journey from '../Journey/Journey';
import {Survey} from '../Survey/Survey';
import {Question} from '../Question/Question';
import GenerateReport from '../GenerateReport/GenerateReport';
//create interface for context

const App:React.FC = () =>{
  const [questions, updateQuestions] = useState<AllQuestionFormat | {}>({});
  let answerKey: any;
  const buildAnswers = (questions: AllQuestionFormat | {}): void => {
    answerKey = Object.keys(questions).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
  }
  useEffect(() => {
    getQuestions().then((data) => updateQuestions(data)).then(() => buildAnswers(questions))
  }, []);

  return (
    <QuestionContext.Provider value={questions}>
      {/*<AnswerContext.Provider value={answerKey}>*/}
        <NavBar />
        <Home />
        <Journey />
        <Survey />
        <Question/>
        <GenerateReport/>
      {/*</AnswerContext.Provider>*/}
     </QuestionContext.Provider>
  );
}
export default App;
