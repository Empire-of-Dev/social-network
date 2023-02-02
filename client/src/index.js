import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import Welcome from './pages/Welcome/Welcome'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes >         
          <Route path="/" element={<Welcome />} />
                          
      </Routes>
    </Router>
);