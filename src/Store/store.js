import {configureStore, createSlice} from "@reduxjs/toolkit";
import filtreFavoris from "./filtreFavoris";

const favorisCarte = createSlice({

    name: "favori",
    initialState: [],
    reducers: {
        ajouterFavorisPersonnage: (state, action) => {
            const nouveauFavorisPersonnage = {
                id: Math.floor(Math.random() * 10000), type_carte: "personnage", text: action.payload
            }
            state.push(nouveauFavorisPersonnage)
        },

        ajouterFavorisArme: (state, action) => {
            const nouveauFavorisArme = {
                id: Math.floor(Math.random() * 10000), type_carte: "arme", text: action.payload
            }
            state.push(nouveauFavorisArme)
        },

        supprimerFavoris: (state, action) => {
            state = state.filter(t => t.text !== action.payload)
            return state
        },

        miseajourFavoris: (state, action) => {
            switch (action.payload) {
                case("personnage"):
                    state = state.filter(carte => carte.type_carte.includes(action.payload));
                    return state

                case("arme"):
                    return state.filter(carte => carte.type_carte === action.payload)

                default:
                    return state
            }
        }
    }
})
export const store = configureStore({
    reducer: {
        todo: favorisCarte.reducer
    },
    filter: filtreFavoris
})

export const {ajouterFavorisPersonnage, ajouterFavorisArme, supprimerFavoris, miseajourFavoris} = favorisCarte.actions