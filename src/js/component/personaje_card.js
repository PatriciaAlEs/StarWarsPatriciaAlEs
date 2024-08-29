import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import "../../styles/una_card.css";
import { Context } from "../store/appContext";



export const PersonajeCard = ({ name, id }) => {

    const { store, actions } = useContext(Context);

    const imagenReserva = "https://user-images.githubusercontent.com/5948318/38711580-ea19e088-3e9c-11e8-9a02-6b46805f311d.png";
    const imagenURL = id ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` : imagenReserva;

    const esFavorito = store.favorito.some(f => f.nombre === name && f.tipo === 'personaje');

    const handleFavoriteToggle = () => {
        actions.añadirFavoritos('personaje', name);
    };

    return (
        <div>
            <div className="card" style={{ width: "19rem" }}>
                <img
                    src={imagenURL}
                    className="card-img-top"
                    alt={`foto personaje ${name}`}
                    onError={(e) => e.target.src = imagenReserva}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
           
                    <div className="botonesleeryfav">
                    <Link to={`/personaje/${id}`} className="btn btn-dark text-warning">Leer más</Link>
                    <button
                            onClick={handleFavoriteToggle}
                            className="btn btn-warning "
                            aria-label={esFavorito ? `Eliminar ${name} de favoritos` : `Añadir ${name} a favoritos`}
                        >
                            <i className={`fa-star ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
                        </button>
						{/* //necesito que lo agregue al dropdown */}
                    </div>
                </div>
            </div>
        </div>
    );
};

