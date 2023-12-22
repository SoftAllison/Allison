// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Views/Dashboard/Dashboard';


function Home() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        {/* Agrega otras rutas según las necesidades de tu aplicación */}
      </Switch>
    </Router>
  );
}

export default Home;
