import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const CartePersonnage = ({nomPersonnage}) => {
    const [infoPersonnage, setInfoPersonnage] = useState([]);

    function formatation(str) {
        if (str === "ayaka") {
            str = str.replace("ayaka", "kamisato_ayaka");
        } else if (str === "ayato") {
            str = str.replace("ayato", "kamisato_ayato");
        } else if (str === "kazuha") {
            str = str.replace("kazuha", "kaedehara_kazuha");
        } else if (str === "kokomi") {
            str = str.replace("kokomi", "sangonomiya_kokomi");
        } else if (str === "sara") {
            str = str.replace("sara", "kujou_sara");
        } else if (str === "raiden") {
            str = str.replace("raiden", "raiden_shogun");
        }

        str = str.replace("-", "_");
        return str;
    }

    useEffect(() => {
        axios
            .get(`https://api.genshin.dev/characters/${nomPersonnage}`)
            .then((res) => {
                setInfoPersonnage(res.data);
            });
    }, [nomPersonnage]);

    return (
        <Link to={`/information_personnage/${nomPersonnage}`}>
            <li className="card" id={infoPersonnage.vision}>
                <div className="infos">
                    <h2>{infoPersonnage.name}</h2>
                    <h2>{infoPersonnage.title}</h2>
                    <img
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatation(
                            nomPersonnage
                        )}/image.png?strip=all&quality=100&w=160`}
                        alt=""
                    />
                    <ul>
                        <h2>Vision : </h2>
                        <img
                            src={`https://gi-builds.sfo3.digitaloceanspaces.com/elements/${infoPersonnage.vision}.png`}
                            alt=""
                            className={"Vision"}
                        />
                    </ul>
                </div>
            </li>
        </Link>
    );
};

export default CartePersonnage;
