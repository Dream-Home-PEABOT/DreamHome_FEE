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
  const [questions, updateQuestions] = useState<any>();
  const [answers, updateAllAnswers] = useState<any>({});

  const buildQuestions = (questions: any): void => {
    const questionKey = Object.keys(questions).filter(data =>{
      return questions[data].attributes.question
    })

    const onlyQuestions = questionKey.map(question =>{
      return questions[question]
    })
    updateQuestions(onlyQuestions)

    const answerKey = questionKey.reduce((acc: any,cur)=>{
      acc[questions[cur].attributes.classification] = ''
      return acc
    },{})
    updateAllAnswers(answerKey)
  }

  useEffect(() => {
    getQuestions().then((data) => buildQuestions(data) )
  }, []);

  let currentQuestion = "hi";
  //let currentQuestion = questions.find(question => !answers[question.attributes.question])

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
