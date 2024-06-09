// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Levelone from './components/Levelone';
import Leveltwo from './components/Leveltwo';
import Levelthree from './components/Levelthree';
import Levelfour from './components/Levelfour';

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levelone" element={<Levelone />} />
        <Route path='/home/leveltwo' element={<Leveltwo />}/>
        <Route path='/levelthree' element={<Levelthree />} />
        <Route path='/levelfour' element={<Levelfour/>}/>
      </Routes>
    
  );
};

export default App;
