import React from 'react';
import './App.css';
import { HomePage } from './Frontend/pages/HomePage';
import {ServicePage} from './Frontend/pages/ServicePage'
// I'm importing ServicePage just to check 
import Signup from './Frontend/pages/signup';
import Login from './Frontend/pages/login';

function App() {
  return (
    <div className="App">
     <HomePage />
    </div>
  );
}

export default App;
