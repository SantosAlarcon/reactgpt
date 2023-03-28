import React, { useState, useContext } from "react";
import { devolverRespuesta, enviarConsulta } from "../logic/ChatGPT";
import "../styles/Prompt.css";
import { consolaContext } from "../App";

/***
 * Este componente lo que hace es pedir interacción al usuario para que escriba un comando o una consulta a ChatGPT.
* **/

const Prompt = () => {
    // Se crea un estado donde se guardará la consulta/comando.
	const [consulta, setConsulta] = useState("");

    // Este estado controla si el input está activado o desactivado.
    const [desactivado, setDesactivado] = useState(false);

    // Se obtiene el contexto de la consola de la app principal
    const {consola, setConsola} = useContext(consolaContext);

	// Esta función se encarga de manejar el evento de pulsar una tecla
    const handlePress = async (e) => {

		// Comprueba que se ha pulsado la tecla Enter.
		if (e.key === "Enter") {

            // Se desactiva el input para que no se pueda modificar.
            setDesactivado(true);
			
            // Se comprueba que si la consulta no está vacía y no se ha escrito ni 'bucle', ni 'clear'.
            // En caso afirmativo se mandará la consulta a ChatGPT.
			if (consulta !== "" && consulta !== "bucle" && consulta !== "clear") {

                // Se muestra en consola un mensaje pidiendo al usuario que espere.
                setConsola(items => [...items, "Un momento, por favor ..."]);
				await enviarConsulta(consulta);

                // Se almacenará la respuesta devuelta por ChatGPT.
				const respuesta = devolverRespuesta();

                // Se añadirá a la consola la respuesta de ChatGPT y se mostrará en negrita.
                setConsola(items => [...items, <div id="respuesta-gpt">{respuesta}</div>]);

                // Se pinta un nuevo componente 'prompt'.
				setConsola(items => [...items, <Prompt key={consola.length} />]);
				// En caso de que la consulta se escriba "bucle", se imprimirá por pantalla un bucle del 1 al 100.
			} else if (consulta === "bucle") {
				setConsola(items => [...items, "Pintando un bucle del 1 al 10..."]);
				for (let i = 1; i <= 10; i++) {
					setConsola(items => [...items, i]);
				}
				setConsola(items => [...items, "Bucle 'for' terminado."]);
				setConsola(items => [...items, <Prompt key={consola.length} />]);
			} else if (consulta === "clear") {
				setConsola(["Soy ChatGPT, tu asistente de IA desarrollado por OpenAI. Estoy a tu entera disposición.", <Prompt key={consola.length} />]);
			}
		}
	};

	return (
		<div className="prompt">
			<input
				type="text"
				value={consulta}
				onChange={(e) => setConsulta(e.target.value)}
				onKeyDown={handlePress}
				name="consulta"
                disabled={desactivado}
                autoFocus={true}
				placeholder="Introduce la consulta a ChatGPT"
			/>
		</div>
	);
};

export default Prompt;
