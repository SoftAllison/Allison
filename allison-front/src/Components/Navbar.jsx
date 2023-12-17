// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Styles/NavbarStyle.css'

export function Navbar() {
    return (<header className ="header" > 
            <nav className = "nav">
                    <a className = "nv-link">Bashboard</a>
                    <a className = "nv-link" >RH</a>
                    <a  className = "nv-link" >Empresa</a>
                    <a  className = "nv-link" >Anuncios</a>
                    <a  className = "nv-link" >SST</a>
                    <a  className = "nv-link" >Configuración</a>
                </nav>
        </header>
    )
}