import {useSelector} from "react-redux";
import FiltreFavoris from "./filtreFavoris";

const FavorisEnTete = () => {
    const favoris = useSelector(state => state.todo)
    return (
        <div>
            <p>
                Nombre de favoris : <strong>{favoris.length}</strong>
            </p>

            <FiltreFavoris />
        </div>
    );
};

export default FavorisEnTete;