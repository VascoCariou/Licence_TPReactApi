import React from 'react';
import Navigation from "./Navigation";
import FavorisListe from "../Store/favorisListe";
import FavorisEnTete from "../Store/FavorisEnTete";

const HomeFavoris = () => {
    return (
        <div>
            <Navigation/>

            <FavorisEnTete/>

            <FavorisListe/>
        </div>
    );
};

export default HomeFavoris;