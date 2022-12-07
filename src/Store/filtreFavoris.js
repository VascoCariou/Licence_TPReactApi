import React from 'react';
import {miseajourFavoris} from "./store";
import {useDispatch} from "react-redux";

const FiltreFavoris = () => {

    const dispatch = useDispatch();

    const handleClick = event => {
        event.preventDefault()

        dispatch(miseajourFavoris(event.target.value))
    };

    return (
        <div>
            <button onClick={handleClick} value={null}>Aucun filtre</button>
            <button onClick={handleClick} value="personnage">Cartes de personnages</button>
            <button onClick={handleClick} value="arme">Cartes d'armes</button>
        </div>
    )
};

export default FiltreFavoris;