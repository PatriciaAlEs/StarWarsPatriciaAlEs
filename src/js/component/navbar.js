import React from "react";
import { Link } from "react-router-dom";
import "../../styles/vista_principal.css";

export const Navbar = () => {
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
                        Tus Favoritos
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {/* Aquí puedes mapear tus favoritos */}
                        <li>
                            <Link className="dropdown-item" to="/un-personaje">
                                Un Personaje
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/un-planeta">
                                Un Planeta
                            </Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/un-vehiculo">
                                Un Vehículo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
