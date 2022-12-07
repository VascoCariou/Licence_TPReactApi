import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {supprimerFavoris} from "./store";
import {formatationArme, formatationPersonnage} from "../Composants/formatation";
const FavorisAffichage = (props) => {

    const [infoCarte, setInfoCarte] = useState([]);
    const {favori} = props
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.type_carte === 'personnage') {
            axios
                .get(`https://api.genshin.dev/characters/${props.favori}`)
                .then((res) => {
                    setInfoCarte(res.data);
                });
        } else if (props.type_carte === "arme") {
            axios
                .get(`https://api.genshin.dev/weapons/${props.favori}`)
                .then((res) => {
                    setInfoCarte(res.data);
                });
        }

    }, [props.favori, props.type_carte]);

    const handleClick = event => {
        event.preventDefault()

        dispatch(supprimerFavoris(favori))
    }

    if (props.type_carte === "personnage") {
        return (
            <ul>
                <li className="card" id={infoCarte.vision}>
                    <div className="infos">

                        <h2>{infoCarte.name}</h2>
                        <h2>{infoCarte.title}</h2>
                        <img
                            src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatationPersonnage(
                                props.favori
                            )}/image.png?strip=all&quality=100&w=160`}
                            alt=""
                        />
                        <ul id="AffichageVision">
                            <h2>Vision : </h2>
                            <img
                                src={`https://gi-builds.sfo3.digitaloceanspaces.com/elements/${infoCarte.vision}.png`}
                                alt=""
                                className={"Vision"}
                            />
                        </ul>
                        <ul>
                            <button
                                onClick={handleClick}
                                value={favori}
                            >
                                <svg width="32" height="32" viewBox="0 0 15 15">
                                    <path fill="currentColor"
                                          d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/>
                                </svg>
                            </button>
                        </ul>
                    </div>
                </li>
            </ul>

        );
    } else if (props.type_carte === "arme") {
        return (
            <li className="card" id={"rarity" + infoCarte.rarity}>
                <div className="infos">
                    <h2>{infoCarte.name && infoCarte.name}</h2>
                    <h2>Type : {infoCarte.type && infoCarte.type}</h2>
                    <img
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/weapons/${formatationArme(
                            props.favori
                        )}.png?strip=all&quality=100&w=208`}
                        alt=""
                    />
                    <ul>
                        <button
                            onClick={handleClick}
                            value={infoCarte}
                        >
                            <svg width="32" height="32" viewBox="0 0 15 15">
                                <path fill="currentColor"
                                      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/>
                            </svg>
                        </button>
                    </ul>
                </div>
            </li>
        );
    } else {
        <ul>
            Un problème est arrivé ! Il n'y a pas de favoris
        </ul>
    }
};

export default FavorisAffichage;