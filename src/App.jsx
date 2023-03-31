import "./styles/App.css";
import "./styles/Responsive.css";
import Logo from "./components/Logo";
import Main from "./components/Main";
import { createContext, useState } from "react";
import Prompt from "./components/Prompt";

export const consolaContext = createContext(null);

console.log(process.env.PRUEBA);

const estadoInicial = [
    "Soy ChatGPT, tu asistente de IA desarrollado por OpenAI. Estoy a tu entera disposición.",
    <Prompt />
]

function App() {
	const [consola, setConsola] = useState(estadoInicial);

	return (
		<div className="App">
			<consolaContext.Provider value={{ consola, setConsola }}>
				<Logo />
				<Main />
			</consolaContext.Provider>
		</div>
	);
}

export default App;
