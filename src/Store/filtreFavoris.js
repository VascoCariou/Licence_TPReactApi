import React from 'react';
import {miseajourFavoris} from "./store";
import {connect, useDispatch} from "react-redux";
import {selecteurFiltre} from "./SelecteurFiltre";

export const FiltreFavoris = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <input
                type="button"
                onClick={() => dispatch(miseajourFavoris("pasdefiltre"))}
                value="aucun filtre"
            />

            <input
                type="button"
                onClick={() => dispatch(miseajourFavoris("personnage"))}
                value="Personnages"
            />

            <input
                type="button"
                onClick={() => dispatch(miseajourFavoris("arme"))}
                value="Armes"
            />
        </div>
    );
};
export default FiltreFavoris;

export const TodoFilterStore = connect(
    state => ({
        value: selecteurFiltre(state)
    }),
    dispatch => ({
        onChange: (value) => dispatch(miseajourFavoris(value))
    })
)(FiltreFavoris)
