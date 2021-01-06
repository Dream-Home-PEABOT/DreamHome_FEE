import React, { useState, useEffect } from 'react';

//types
import { data } from '../../types';
//components
import Home from '../Home/Home';
import Error from '../Error/Error';
import Journey from '../Journey/Journey';
import Sourvey from '../Sourvey/Sourvey';
import GenerateReport from '../GenerateReport/GenerateReport';

import './App.css';

const Context = React.createContext()


const App: React.FC = () => {

  const [data, setData] = useState<data>({});

  const getQuestionsData = () => {

    setData();
  }

  return (
    //create interface for data
    <Context.Provider data={data}>
      <Home />
      <Error />
      <Journey />
      <Sourvey />
      <GenerateReport />
    </Context.Provider>
  );
}

export default App;
