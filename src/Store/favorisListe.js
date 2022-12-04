import {useSelector} from "react-redux";
import FavorisAffichage from "./favorisAffichage";

const FavorisListe = () => {
    const favoris = useSelector(state => state.todo)

    return (
        <div className="carte">
            <ul>
                {favoris.map((t) => (
                    <FavorisAffichage
                        key={t.id}
                        type_carte={t.type_carte}
                        favori={t.text}/>
                ))}
            </ul>
        </div>
    );
};

export default FavorisListe;