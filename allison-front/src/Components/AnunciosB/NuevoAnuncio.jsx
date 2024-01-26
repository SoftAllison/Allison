/* eslint-disable react/prop-types */
import './AnunciosStyle.css'



function NuevoAnuncio(props) {
        return(
            <>
            <div className='container-nw'>
                <p className='titulo'>{props.title}</p>
                <p className='info'>{props.info}</p>
                <p className='area'> Área: {props.area}</p>
                <p className='fecha'> Fecha: {props.fecha}</p>
            </div>
              
            </>
                

            
        )
}

export default NuevoAnuncio