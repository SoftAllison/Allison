// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home'; // Suponiendo que App contiene la configuración de las rutas


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Home />
  </Router>,
 
)
