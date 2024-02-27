import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/home' element={<Home />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
