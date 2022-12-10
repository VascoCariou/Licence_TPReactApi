import {useSelector} from "react-redux";
import {TodoFilterStore} from "./filtreFavoris";

const FavorisEnTete = () => {
    const favoris = useSelector(state => state.todo)

    return (
        <div>
            <p>
                Nombre de favoris : <strong>{favoris.length}</strong>
            </p>

            <TodoFilterStore/>
        </div>
    );
};

export default FavorisEnTete;