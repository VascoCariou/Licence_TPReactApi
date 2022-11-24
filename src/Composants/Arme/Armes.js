import axios from "axios";
import React, { useEffect, useState } from "react";
import CarteArmes from "./CarteArmes";

const Armes = () => {
  const [listeArmes, setListeArmes] = useState([]);

  useEffect(() => {
    axios.get("https://api.genshin.dev/weapons").then((res) => {
      setListeArmes(res.data);
    });
  }, []);

  return (
    <div className="carte">
      <h1>Les armes du jeu</h1>

      <ul>
        {listeArmes.map((personnage, index) => (
          <CarteArmes key={index} nomArmes={personnage} />
        ))}
      </ul>
    </div>
  );
};

export default Armes;
