import React, { useState, useContext } from "react";
import "../styles/Main.css";
import {consolaContext} from "../App";

const Main = () => {
    // Se obtienen los datos de la consola usando el contexto.
    const {consola} = useContext(consolaContext);
 
	// Se mostrará en pantalla toda la información que hay en la consola.
	return <main>{consola.map((item, index) => <div key={index}>{item}</div>)}</main>;
};

export default Main;
