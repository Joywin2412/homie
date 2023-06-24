import React from 'react';
import './App.css';
import { HomePage } from './Frontend/pages/HomePage';
import {ServicePage} from './Frontend/pages/ServicePage'
// I'm importing ServicePage just to check 
function App() {
  return (
    <div className="App">
     <ServicePage/>
    </div>
  );
}

export default App;
