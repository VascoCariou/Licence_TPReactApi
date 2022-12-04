import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from "../../Pages/Navigation";
import {formatationArme} from "../formatation";

const InformationArmes = () => {
    const [infoArmes, setInfoArmes] = useState([]);
    const {nomArmes} = useParams();

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [nomArmes]);

    const getProducts = async () => {
        await axios
            .get(`https://api.genshin.dev/weapons/${nomArmes}`)
            .then((res) => {
                setInfoArmes(res.data);
            });
    };

    return (
        <div>
            <Navigation/>
            <li>
                <ul className="information-personnage">
                    <h1>Type d'arme : {infoArmes.type}</h1>
                </ul>
                <ul className="information-personnage">
                    <h1>Titre : {infoArmes.passiveName}</h1>
                </ul>
            </li>

            <li>
                <ul className="information-personnage">
                    <img
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/weapons/${formatationArme(
                            nomArmes
                        )}.png?strip=all&quality=100&w=208`}
                        alt=""
                    />
                </ul>
                <ul className="information-personnage">
                    <h2>Effet de l'arme : {infoArmes.passiveDesc}</h2>
                </ul>
            </li>
        </div>
    );
};

export default InformationArmes;
