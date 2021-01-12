import React, {useState , useEffect, useContext, useRef} from 'react';
import {AnswerContext, QuestionContext, ReportContext, AllQuestionFormat} from '../../types'
import {getQuestions} from '../../apiCalls';
import {Switch, Route, __RouterContext, Redirect} from 'react-router';
import { useTransition, animated } from "react-spring";

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Journey from '../Journey/Journey';
import {Survey} from '../Survey/Survey';
import {Question} from '../Question/Question';
import GenerateReport from '../GenerateReport/GenerateReport';
import Report from '../Report/Report'
import Error from '../Error/Error';


const App:React.FC = () =>{

  const [questions, updateQuestions] = useState<any>({});
  const [answers, updateAllAnswers] = useState<any>({});
  const [report, updateReport] = useState<any>(null);

  const { location } = useContext<any>(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform:'translate(100%, 0)'},
    enter: {opacity: 1, transform:'translate(0%, 0)'},
    leave: {opacity: 0, transform:'translate(-50%, 0)'},
  })

  const buildAnswers = (questions: AllQuestionFormat | {}): void => {
    const answerKey = Object.keys(questions).reduce((acc: any,cur)=>{
        acc[cur] = ''
        return acc
      },{})
      updateAllAnswers(answerKey)
  }
  const unmounted = useRef(false)
  const populateQuestions = async () =>{
    if (!unmounted.current){
    const data = await getQuestions()
    await data
    buildAnswers(data)
    updateQuestions(data)
    }
  }

  useEffect(() => {
    populateQuestions()
    return () => { unmounted.current = true }
  },[]);

  return (
    <QuestionContext.Provider value={questions}>
      <AnswerContext.Provider value={answers}>
        <ReportContext.Provider value={report}>
        <NavBar/>
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
          <Switch location={item}>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/journey" component={Journey}/>
            <Route exact path="/survey" component={Survey}/>
            <Route exact path="/question" component={()=><Question
                updateAllAnswers={updateAllAnswers}/>}/>
            <Route exact path="/generate_report" component={()=><GenerateReport
                updateReport={updateReport}/>}/>
            <Route exact path="/report" component={Report} />
            <Route path='/*' component={Error}/>
          </Switch>
          </animated.div>
        ))}
        </ReportContext.Provider>
      </AnswerContext.Provider>
    </QuestionContext.Provider>
  );
}
export default App;
