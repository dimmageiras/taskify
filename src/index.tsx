import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

const container: HTMLElement | null = document.querySelector("#root");
const root: ReactDOMClient.Root | null =
	container && ReactDOMClient.createRoot(container);

root &&
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
