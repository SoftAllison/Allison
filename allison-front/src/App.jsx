// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Views/Dashboard/Dashboard';
import AnunciosView from './Components/Views/AnunciosView/AnunciosView'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/anunciosview" element={<AnunciosView />} /> 
        
      </Routes>
    </>
  );
}

export default App;
