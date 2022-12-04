import {BrowserRouter, Route, Routes} from "react-router-dom";
import InformationPersonnage from "./Composants/Personnage/InformationPersonnage";
import InformationArmes from "./Composants/Arme/InformationArmes";
import HomeArmes from "./Pages/HomeArmes";
import HomePersonnage from "./Pages/HomePersonnage";
import React from "react";
import {store} from "./Store/store";
import {Provider} from "react-redux";
import HomeFavoris from "./Pages/HomeFavoris";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/personnage" element={<HomePersonnage/>}/>
                    <Route path="/arme" element={<HomeArmes/>}/>
                    <Route path="*" element={<HomePersonnage/>}/>
                    <Route
                        path="/information_personnage/:nomPersonnage"
                        element={<InformationPersonnage/>}
                    />
                    <Route
                        path="/information_arme/:nomArmes"
                        element={<InformationArmes/>}
                    />
                    <Route path="/favoris" element={<HomeFavoris/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
