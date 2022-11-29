import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../../Pages/Navigation";

const InformationPersonnage = () => {
  const [infoPersonnage, setInfoPersonnage] = useState([]);
  const { nomPersonnage } = useParams();

  function formatation(str) {
    str = str.replace("-", "_");
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
    return str;
  }

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
        <Navigation />
        <li>
          <ul className="information-personnage">
            <img
                src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatation(
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
                src={`https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/${formatation(
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
