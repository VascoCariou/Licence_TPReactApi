import {useSelector} from "react-redux";

const FavorisEnTete = () => {
    const favoris = useSelector(state => state.todo)
    return (
        <div>
            <p>
                Nombre de favoris : <strong>{favoris.length}</strong>
            </p>
        </div>
    );
};

export default FavorisEnTete;