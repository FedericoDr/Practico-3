import React from 'react'
import { Imagenes } from './datos'
import DatosRender from './render'

function Galeria() {
    return (

        <div className='galeria'>

            <DatosRender carrusel={ Imagenes }/>

        </div>
        
    )
}

export default Galeria
