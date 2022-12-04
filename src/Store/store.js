import {configureStore, createSlice} from "@reduxjs/toolkit";

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
        }
    }
})
export const store = configureStore({
    reducer: {
        todo: favorisCarte.reducer
    }
})

export const {ajouterFavorisPersonnage, ajouterFavorisArme, supprimerFavoris} = favorisCarte.actions