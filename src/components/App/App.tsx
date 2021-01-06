import React, {useState, useContext, useEffect} from 'react';
import {Context, QuestionNode} from '../../types'
import {getUserSkins} from '../../apiCalls'

//components
import {Home} from '../Home/Home';
//import Error from '../Error/Error';
//import Journey from '../Journey/Journey';
//import Sourvey from '../Sourvey/Sourvey';
//import GenerateReport from '../GenerateReport/GenerateReport';
//import './App.css';

//create interface for context

const App:React.FC = () =>{
  let initial = {
    profile: [],
    comments: [],
    posts: []
  }
  const [questions, updateQuestions] = useState<QuestionNode>(initial);
  useEffect(() => {
    getUserSkins().then((data) => updateQuestions(data))
  }, []);

  return (
    <Context.Provider value={questions}>
      <div>
        <Home />
      </div>
     </Context.Provider>
  );
}

export default App;
