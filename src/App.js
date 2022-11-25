import { BrowserRouter, Route, Routes } from "react-router-dom";
import InformationPersonnage from "./Composants/Personnage/InformationPersonnage";
import InformationArmes from "./Composants/Arme/InformationArmes";
import HomeArmes from "./Pages/HomeArmes";
import HomePersonnage from "./Pages/HomePersonnage";

function App() {

  //test commit
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personnage" element={<HomePersonnage />} />
        <Route path="/arme" element={<HomeArmes />} />
        <Route path="*" element={<HomePersonnage />} />
        <Route
          path="/information_personnage/:nomPersonnage"
          element={<InformationPersonnage />}
        />
        <Route
          path="/information_arme/:nomArmes"
          element={<InformationArmes />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
