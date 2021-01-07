import React, { useState, useEffect } from 'react';

//types
import { data } from '../../types';
//components
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
// import Error from '../Error/Error';
// import Journey from '../Journey/Journey';
import Sourvey from '../Sourvey/Sourvey';
// import GenerateReport from '../GenerateReport/GenerateReport';

import './App.css';

const Context = React.createContext({})


const App = () => {

  const [data, setData] = useState<data>();

  const getQuestionsData = () => {

    // setData();
  }

  return (
    <>
    {/* //create interface for data
    // <Context.Provider data={data}>
    //   <Error />
  //   <Journey /> */}
    
    <NavBar />
    <Home />
    <Sourvey />
    {/* //  <GenerateReport />
    // </Context.Provider> 
    */}
    </>
    );
}

export default App;
