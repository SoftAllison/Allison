// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavbarStyle.css'; 
import { Link } from 'react-router-dom';
import { BsBuilding, BsFillExclamationCircleFill, BsGearFill, BsHouseDoorFill, BsMenuButtonWideFill, BsPencilSquare, BsPersonVcardFill} from "react-icons/bs";

function Navbar() {
  return (
    <> 
      <header className="header">
      <nav className="nav">
        <Link className="nv-link" to="/home">Home <BsHouseDoorFill className='nv-link-icon' /></Link>
        <Link className="nv-link" to="/dashboard">Dashboard <BsMenuButtonWideFill className='nv-link-icon' /></Link>
        <Link className="nv-link" to="/rh">RH <BsPersonVcardFill className='nv-link-icon' /> </Link>
        <Link className="nv-link" to="/empresa">Empresa <BsBuilding className='nv-link-icon' /> </Link>
        <Link className="nv-link" to="/anunciosview">Anuncios <BsFillExclamationCircleFill className='nv-link-icon'/> </Link>
        <Link className="nv-link" to="/sst">SST <BsPencilSquare className='nv-link-icon' / > </Link>
        <Link className="nv-link" to="/configuracion">Configuración <BsGearFill  className='nv-link-icon'/> </Link>
      </nav>
     </header>
    </>      
  );
}

export default Navbar;

 