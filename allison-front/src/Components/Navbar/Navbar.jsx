// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavbarStyle.css'; 
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <Link className="nv-link" to="/">Home</Link>
        <Link className="nv-link" to="/dashboard">Dashboard</Link>
        <Link className="nv-link" to="/rh">RH</Link>
        <Link className="nv-link" to="/empresa">Empresa</Link>
        <Link className="nv-link" to="/anuncios">Anuncios</Link>
        <Link className="nv-link" to="/sst">SST</Link>
        <Link className="nv-link" to="/configuracion">Configuración</Link>
      </nav>
    </header>
  );
}

export default Navbar;

