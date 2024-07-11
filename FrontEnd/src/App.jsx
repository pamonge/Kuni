import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Presentation from './routes/Presentation';
import ArtGalery from './routes/ArtGalery';
import Papers from './routes/Papers';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Presentation />} />
      <Route path='/artgalery' element={<ArtGalery />} />
      <Route path='/papers' element={<Papers />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App;
