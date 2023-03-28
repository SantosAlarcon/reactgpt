import React, { useEffect, useState } from "react";
import Prompt from "../components/Prompt";

export default function useConsole() {
	const [consola, setConsola] = useState([]);

	useEffect(() => {
		setConsola([
            "Soy ChatGPT, o tu asistente, como lo quieras llamar. Estoy a tu entera disposición.",
            "La Momo Momota es más maja que las pesetas."
        ]);
        add(<Prompt key={consola.length} />);
	}, []);

	// Esta función limpia la pantalla y carga el mensaje de bienvenida y el Prompt.
	const clear = () => {
		setConsola([
			"Soy ChatGPT, o tu asistente, como lo quieras llamar. Estoy a tu entera disposición.",
			"La Momo Momota te quiere dar un abrazo muy fuerte.",
			<Prompt key={consola.length} />,
		]);
	};

    // Se añade a la consola el nuevo objeto para luego ser mostrado en pantalla.
    const add = (item) => {
        setConsola(datos => [...datos, item]);
    }

    // Devuelve el número de elementos que hay en el estado de la consola.
    const len = () => {
        return consola.length;
    }

    const getConsola = () => {
        return consola;
    }

    return {getConsola, add, clear, len}
};
