import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bienvenida from "./components/Bienvenida";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
        {/*<Bienvenida />*/}
		<App />
	</React.StrictMode>
);
