// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import '../AnunciosB/AnunciosStyle.css'
import NuevoAnuncio from '../AnunciosB/NuevoAnuncio';
import { CiBellOn } from "react-icons/ci";



function Anuncios() {
    const [mostrarDiv, setMostrarDiv] = useState(false);

    const mostrarContenido = () => {
        setMostrarDiv(!mostrarDiv)
    }


    return(

        <> 
        <button 
        onClick={mostrarContenido} 
        className='bt-noticias'
        ><CiBellOn />
        </button>
             {
            mostrarDiv && (
             <div className='container'>
                 <p>Anuncios</p> 
                 <NuevoAnuncio
                 title='hola'
                 info='se necesita programador web con experiencia en jquery, html, css y js con minimo 4 años de experiencia'
                 area='Marketing digital'
                 fecha='10 jul 2024'
                 />
            </div>
            )}
        </>
        
    )
}



export default Anuncios




