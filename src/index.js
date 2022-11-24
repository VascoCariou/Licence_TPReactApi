import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>PRESENTATION DE L'API GENSHIN IMPACT</h1>
    <h2>
      <p>Bonjour, vous vous trouvez dans le TP de Vasco CARIOU.</p>
      <p>
        Ce TP utilise un api qui est en rapport avec le jeu vidéo "Geshin
        Impact" Lien de l'api :
        <a href="https://api.genshin.dev">https://api.genshin.dev</a>
      </p>
      <p>Pour informations la page wikipedia du jeu : </p>
      <p>
        <h2>
          Pour informations la page wikipedia du jeu :
          <a href="https://fr.wikipedia.org/wiki/Genshin_Impact">
            Wikipédia du jeu
          </a>
        </h2>
      </p>
    </h2>
    <App />
  </React.StrictMode>
);
