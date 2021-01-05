import React from 'react';

//components
import Home from '../Home/Home';
import Error from '../Error/Error';
import Journey from '../Journey/Journey';
import Sourvey from '../Sourvey/Sourvey';
import GenerateReport from '../GenerateReport/GenerateReport';

import './App.css';

// const Context = React.createContext()

function App() {

  return (
    <div>
      <Home />
      <Error />
      <Journey />
      <Sourvey />
      <GenerateReport />
    </div>
  );
}

export default App;
