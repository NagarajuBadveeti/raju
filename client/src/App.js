import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Raju from './Components/raju';
import Ambulance from './Components/raju1';

 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/raju" Component={Raju}/>
      <Route path="/amb" Component={Ambulance}/>
         

          </Routes>
    </BrowserRouter>
  );
};

export default App;