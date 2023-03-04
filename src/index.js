import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Play from './components/Play.js';
import Home from './components/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/play" element= { <Play/>}/>
    </Routes>
  </BrowserRouter>
);