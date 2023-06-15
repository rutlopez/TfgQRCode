import React from 'react';
import Home from './components/Home';
import Card from './components/Card';
import { Routes, Route, } from 'react-router-dom';
import './App.css';

/* Rutas de navegación */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}


export default App;
