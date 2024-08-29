import React, { useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {

    const { store, actions } = useContext(Context);
   

    const deleteFavorito = (nombreFavorito) => {
        actions.deleteFavoritos(nombreFavorito);
    };

    const handleDeleteFavorito = (tipo, nombreFavorito) => {
        actions.deleteFavoritos(tipo, nombreFavorito);
    };

    return (
        <nav className="navbar navbar-light bg-light bg-black">
            <Link to="/">
                <img
                    src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg "
                    alt="Star Wars Logo"
                    className="navbar-brand mb-0 h1"
                    style={{ width: '150px', cursor: 'pointer' }} // Ajusta el tamaño y el cursor si es necesario

                />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle "
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"

                    >

                        Tus Favoritos {store.favorito.length}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {store.favorito?.map((favorito, index) => (
                            <li 
                            className="listadefavoritos" 
                            key={index}>
                                <span className="dropdown-item">
                                   {favorito.nombre}
                                </span>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDeleteFavorito(favorito.tipo, favorito.nombre)}
                                    aria-label={`Eliminar ${favorito.nombre} de favoritos`}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
