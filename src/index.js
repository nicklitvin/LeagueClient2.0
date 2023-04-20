import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./index.css";

import Play from './components/Play.js';
import Home from './components/Home.js';
import CollectionsChampions from './components/Collections/main.js';
import CollectionsChampionsSkins from './components/Collections/ChampionSkins.js';
import CollectionsChampionAbilities from './components/Collections/ChampionAbilities.js';
import CollectionsChampionProgressions from "./components/Collections/ChampionProgressions.js"
import CollectionsSkins from "./components/Collections/Skins.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/play" element= { <Play/>}/>
      <Route path="/collectionsChampions" element = {<CollectionsChampions/>}/>
      <Route path="/collectionsChampionsSkins" element={ <CollectionsChampionsSkins/> }/>
      <Route path="/collectionsChampionsAbilities" element={<CollectionsChampionAbilities/>}></Route>
      <Route path="/collectionsChampionsProgressions" element={<CollectionsChampionProgressions/>}></Route>
      <Route path="/collectionsSkins" element={<CollectionsSkins/>}></Route>
    </Routes>
  </BrowserRouter>
);