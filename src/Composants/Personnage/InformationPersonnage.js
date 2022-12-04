import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from "../../Pages/Navigation";
import {formatationPersonnage} from "../formatation";

const InformationPersonnage = () => {
    const [infoPersonnage, setInfoPersonnage] = useState([]);
    const {nomPersonnage} = useParams();

    useEffect(() => {
        getParamURL()
        // eslint-disable-next-line
    }, [nomPersonnage]);

    const getParamURL = async () => {
        if (nomPersonnage !== undefined) {
            await axios
                .get(`https://api.genshin.dev/characters/${nomPersonnage}`)
                .then((res) => {
                    setInfoPersonnage(res.data);
                });
        }
    };

    return (
        <div>
            <Navigation/>
            <li>
                <ul className="information-personnage">
                    <img
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatationPersonnage(
                            nomPersonnage
                        )}/image.png?strip=all&quality=100&w=160`}
                        alt=""
                    />
                </ul>

                <ul className="information-personnage">
                    <h1>Informations génériques</h1>
                    <h2>
                        Nom du personnage et titre : {infoPersonnage.name},{" "}
                        {infoPersonnage.title}
                    </h2>
                    <h2>Pays d'origine : {infoPersonnage.nation}</h2>
                    <h2>Groupe affilier : {infoPersonnage.affiliation}</h2>
                </ul>

                <ul className="information-personnage">
                    <h1>Informations de gameplay</h1>
                    <h2>Type de vision : {infoPersonnage.vision}</h2>
                    <h2>Arme utilisé : {infoPersonnage.weapon}</h2>
                </ul>
            </li>
            <li>
                <ul className="information-personnage">
                    <img
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatationPersonnage(
                            nomPersonnage
                        )}/header_image.png?strip=all&quality=10`}
                        alt=""
                        className="background-image"
                        id={infoPersonnage.vision}
                    />
                </ul>
            </li>
        </div>
    );
};

export default InformationPersonnage;
