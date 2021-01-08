import React, {useState , useEffect} from 'react';
import {AnswerContext, QuestionContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls'
import {Switch, Route, Link} from 'react-router-dom'

//components
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Journey from '../Journey/Journey';
import {Survey} from '../Survey/Survey';
import {Question} from '../Question/Question';
import GenerateReport from '../GenerateReport/GenerateReport';
import Error from '../Error/Error';
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

  const buildQuestions = (questions: any): void => {
    const questionKey = Object.keys(questions).filter(data =>{
      return questions[data].attributes.question
    })
    const onlyQuestions = questionKey.map(question =>{
      return questions[question]
    })
      updateQuestions(onlyQuestions)
  }

  useEffect(() => {
    getQuestions().then((data) => buildAnswers(data) ).then((data) => buildQuestions(data))
  }, []);

  let currentQuestion = Object.keys(questions).find(question => !answers[question])

  return (
    <QuestionContext.Provider value={questions}>
      <AnswerContext.Provider value={answers}>
        <NavBar />
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/journey" component={Journey}/>
        <Route exact path="/survey" component={Survey}/>
          <Route exact path="/question" component={()=><Question 
            currentQuestion={currentQuestion || "Loading"} updateAllAnswers={updateAllAnswers}/>}/>
        <Route exact path="/generate_report" component={GenerateReport}/>
        <Route component={Error}/>
        <GenerateReport/>
        </Switch>
      </AnswerContext.Provider>
     </QuestionContext.Provider>
  );
}
export default App;
