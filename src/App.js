

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/auth/Login';
import Collections from './components/Collections/Collections';
import Register from './components/auth/Register';
import CollectionDetail from './components/Collections/CollectionDetail';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/signup" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="c/" element={<Collections />} />
          <Route path="/co" element={<CollectionDetail />} />
         
          
          <Route path="/home" element={<Home />} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;
