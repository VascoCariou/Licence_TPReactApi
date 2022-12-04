import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ajouterFavorisPersonnage} from "../../Store/store";
import {formatationPersonnage} from "../formatation";

const CartePersonnage = ({nomPersonnage}) => {
    const [infoPersonnage, setInfoPersonnage] = useState([]);
    const dispatch = useDispatch()
    const handleClick = event => {
        event.preventDefault()

        dispatch(ajouterFavorisPersonnage(nomPersonnage))
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
                        src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatationPersonnage(
                            nomPersonnage
                        )}/image.png?strip=all&quality=100&w=160`}
                        alt=""
                    />
                    <ul id="AffichageVision">
                        <h2>Vision : </h2>
                        <img
                            src={`https://gi-builds.sfo3.digitaloceanspaces.com/elements/${infoPersonnage.vision}.png`}
                            alt=""
                            className={"Vision"}
                        />
                    </ul>
                    <ul>
                        <button
                            onClick={handleClick}
                            value={nomPersonnage}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="m8.85 17.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425Zm3.15.45l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Zm0-5.025Z"/>
                            </svg>
                        </button>
                    </ul>
                </div>
            </li>
        </Link>
    );
};

export default CartePersonnage;
