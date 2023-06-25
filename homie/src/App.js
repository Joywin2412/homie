import React from 'react';
import './App.css';
import { HomePage } from './Frontend/pages/HomePage';
import {ServicePage} from './Frontend/pages/ServicePage'
import { ServiceProducerPage } from './Frontend/pages/ServiceProducerPage';
// I'm importing ServicePage just to check 
import Signup from './Frontend/pages/signup';
import Login from './Frontend/pages/login';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/serviceTickets" element = {<ServicePage />} />
        <Route path = "/serviceProducer/:id" element = {<ServiceProducerPage />} />
      </Routes>
    </div>
  );
}

export default App;
