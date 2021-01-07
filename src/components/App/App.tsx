import React, {useState , useEffect} from 'react';
import {AnswerContext, QuestionContext, AllQuestionFormat} from '../../types'
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
  const [answers, updateAllAnswers] = useState<any>({});
  const buildAnswers = (questions: AllQuestionFormat | {}): {} => {
    const answerKey = Object.keys(questions).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
      updateAllAnswers(answerKey)
      return questions
  }
  useEffect(() => {
    getQuestions().then((data) => buildAnswers(data) ).then((data) => updateQuestions(data))
  }, []);
  let currentQuestion = Object.keys(questions).find(question => !answers[question])
  return (
    <QuestionContext.Provider value={questions}>
      <AnswerContext.Provider value={answers}>
        <NavBar />
        <Home />
        <Journey />
        <Survey />
        <Question currentQuestion={currentQuestion || "Loading"} updateAllAnswers={updateAllAnswers}/>
        <GenerateReport/>
      </AnswerContext.Provider>
     </QuestionContext.Provider>
  );
}
export default App;
