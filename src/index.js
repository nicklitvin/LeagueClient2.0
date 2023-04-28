import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import Play from './components/Play.js';
import Home from './components/Home.js';
import CollectionsChampions from './components/CollectionsChampions.js';
import NightMarket from './components/NightMarket.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/play" element= { <Play/>}/>
      <Route path="/collectionsChampions" element = {<CollectionsChampions/>}/>
      <Route path="/nightmarket" element = {<NightMarket/>}/>
    </Routes>
  </BrowserRouter>
);