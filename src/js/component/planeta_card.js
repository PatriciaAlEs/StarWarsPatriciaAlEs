import React, {useContext} from "react";
import "../../styles/una_card.css"
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";

export const PlanetaCard = ({ name, id }) => {

    const { store, actions } = useContext(Context);

	const imagenReserva = "https://myriadcreativeservices.com/resources/wp-content/uploads/2022/08/404-article-17-1024x913.png"
	const imagenURL = id ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : imagenReserva;

    const esFavorito = store.favorito.some(f => f.nombre === name && f.tipo === 'planeta');

    const handleFavoriteToggle = () => {
        actions.añadirFavoritos('planeta', name);
    };

    return (

        <div>
            <div className="card" style={{ width: "19rem" }}>
                <img src={imagenURL}
                    className="card-img-top"
                    alt={`foto planeta ${name}`}
                    onError={(e) => e.target.src = imagenReserva}
                    />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"></p>
                    <div className="botonesleeryfav">
                        <Link to={`/planeta/${id}`}  className="btn btn-dark text-warning">Leer más</Link>
                        {/* necesito que me lleve a un_planeta */}
                        <button
                            onClick={handleFavoriteToggle}
                            className="btn btn-warning"
                            aria-label={esFavorito ? `Eliminar ${name} de favoritos` : `Añadir ${name} a favoritos`}
                        >
                            <i className={`fa-star ${esFavorito ? 'fa-solid' : 'fa-regular'}`}></i>
                        </button>
						{/* //necesito que lo agregue al dropdown */}
                        {/* podria añadir un alert que pusiera añadido a favoritos! */}
                    </div>
                </div>
            </div>
        </div>
    )

}

