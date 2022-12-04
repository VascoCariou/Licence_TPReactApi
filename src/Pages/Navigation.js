import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink
                    to="/personnage"
                    className={(nav) => (nav.isActive ? "nav-active" : " ")}
                >
                    <li>Les personnages</li>
                </NavLink>

                <NavLink
                    to="/arme"
                    className={(nav) => (nav.isActive ? "nav-active" : " ")}
                >
                    <li>Les armes</li>
                </NavLink>


                <NavLink
                    to="/favoris"
                    className={(nav) => (nav.isActive ? "nav-active" : " ")}
                >
                    <li>Les cartes favorites</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
