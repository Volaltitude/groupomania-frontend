import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Error404 from './pages/Error404';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/login" element={<Connexion />} />
        <Route path="/signup" element={<Inscription />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
