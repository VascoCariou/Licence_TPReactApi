import axios from "axios";
import React, {useEffect, useState} from "react";
import CartePersonnage from "./CartePersonnage";

const Personnage = () => {
    const [listePersonnage, setListePersonnage] = useState([]);

    useEffect(() => {
        axios.get("https://api.genshin.dev/characters").then((res) => {
            setListePersonnage(res.data);
        });
    }, []);

    return (
        <div className="carte">
            <h1>Les personnages</h1>

            <ul>
                {listePersonnage.map((personnage, index) => (
                    <CartePersonnage key={index} nomPersonnage={personnage}/>
                ))}
            </ul>
        </div>
    );
};

export default Personnage;
