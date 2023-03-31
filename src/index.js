import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>PRESENTATION DE L'API GENSHIN IMPACT</h1>
        <App/>
    </React.StrictMode>
);
