import React, { useState } from 'react'
import "../styles/Bienvenida.css"

const Bienvenida = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(false);
    }

  return (
    <div id="modal-bienvenida" style={visible ? {display: 'flex'} : {display: 'none'}}>
            <div id="modal-titulo">
                <span></span>
                <span></span>
                <span></span>
                ¡Bienvenid@ a ReactGPT!
            </div>
            <div id="modal-cuerpo">
                <p>Esta aplicación hace uso de la tecnología <b>ChatGPT</b> de <b>OpenAI</b>. Está escrita usando la famosa librería de JavaScript <b>React</b>.</p>
                <p>Introduce la consulta en el <b>"prompt"</b> y en cuestión de segundos, el <b>ChatGPT</b> te responderá con la consulta que le hayas hecho.</p>
                <p><b>¡A disfrutar usando esta app! 😉</b></p>
            </div>
            <div id="boton-comenzar">
                <button onClick={handleClick}>Comenzar</button>
            </div>
        </div>
  )
}

export default Bienvenida
