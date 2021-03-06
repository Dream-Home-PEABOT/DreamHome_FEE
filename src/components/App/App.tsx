import React, { useState, useEffect, useContext, useRef } from "react";
import {
  AnswerContext,
  QuestionContext,
  ReportContext,
} from "../../helpers/context";
import {
  getQuestions,
  getUniqueReport,
  getReport,
} from "../../helpers/apiCalls";
import { Switch, Route, __RouterContext, Redirect } from "react-router";
import { useTransition, animated } from "react-spring";
import firebase from "firebase/app";
import "firebase/auth";
// import { withRouter } from 'react-router-dom'

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Journey from "../Journey/Journey";
import { Survey } from "../Survey/Survey";
import { Question } from "../Question/Question";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import GenerateReport from "../GenerateReport/GenerateReport";
import Report from "../Report/Report";
import Error from "../Error/Error";

const App: React.FC = () => {
  const [questions, updateQuestions] = useState<any>({});
  const [answers, updateAllAnswers] = useState<any>({});
  const [report, updateReport] = useState<any>(null);
  // const [errorMessage, setError] = useState<any>("Oops an error has occurred");
  // const [errorNum, setErrorNum] = useState<any>(404);
  const { location } = useContext<any>(__RouterContext);
  const unmounted = useRef(false);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });

  const buildAnswers = (questions: any): void => {
    const answerKey = Object.keys(questions).reduce((acc: any, curr: any) => {
      acc[curr] = "";
      return acc;
    }, {});
    updateAllAnswers(answerKey);
  };

  const populateQuestions = async () => {
    if (!unmounted.current) {
      const data = await getQuestions();
      await data;
      buildAnswers(data);
      updateQuestions(data);
    }
  };

  const checkForReport = async () => {
    if (localStorage.userUID) {
      const data = await getUniqueReport(localStorage.userUID);
      data["01_type"] && updateReport(data);
    }
  };

  useEffect(() => {
    checkForReport();
    populateQuestions();
    return () => {
      unmounted.current = true;
    };
  }, [firebase.auth().currentUser]);

  return (
    <QuestionContext.Provider value={questions}>
      <AnswerContext.Provider value={answers}>
        <ReportContext.Provider value={report}>
          <NavBar loggedIn={firebase.auth().currentUser} />
          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Redirect exact from="/" to="/home" />
                <Route
                  exact
                  path="/profile"
                  component={() => <Profile updateReport={updateReport} />}
                />
                <Route exact path="/home" component={Home} />
                <Route exact path="/journey" component={Journey} />
                <Route exact path="/login" component={Login} />
                <Redirect from="/logout" to="/home" />
                <Route exact path="/survey" component={Survey} />
                <Route
                  exact
                  path="/question"
                  component={() => (
                    <Question updateAllAnswers={updateAllAnswers} />
                  )}
                />
                <Route
                  exact
                  path="/generate_report"
                  component={() => (
                    <GenerateReport updateReport={updateReport} />
                  )}
                />
                <Route exact path="/report" component={() => <Report />} />
                <Route
                  path="/*"
                  component={() => (
                    <Error
                      errorMessage={"Oops an error has occurred"}
                      errorNum={"404"}
                    />
                  )}
                />
              </Switch>
            </animated.div>
          ))}
        </ReportContext.Provider>
      </AnswerContext.Provider>
    </QuestionContext.Provider>
  );
};
export default App;
