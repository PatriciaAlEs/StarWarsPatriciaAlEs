import React, { useContext, useEffect } from "react";
import "../../styles/vista_detallada.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const UnPersonaje = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams();
    // esto es para acceder a los parametros de la url, extra el valor del parametro id de los parametros de la url para obtener el identificador del personaje que quiero mostrar

    useEffect(() => {
            actions.obtenerDetallesPersonaje(id);
        
    }, []);

    const imagenReserva = "https://user-images.githubusercontent.com/5948318/38711580-ea19e088-3e9c-11e8-9a02-6b46805f311d.png";
    const imagenURL = id ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` : imagenReserva;


    return (
        <div className="contenerdor">
            <div className="vista-detallada mb-3 row">
                <div className="divimagen col-12 col-sm-6 col-lg-6">
                    <img 
                        src={imagenURL}
                        className="img-detalle" 
                        alt="detalle personaje StarWars" 
                        onError={(e) => e.target.src = imagenReserva}
                    />
                </div>

                <div className="card-body p-3 col-12 col-sm-6 col-lg-6">
                    <h3 className="card-title"> {store.unpersonaje.name}</h3>
                    <p className="vista-detallada-texto">Height: {store.unpersonaje.height} cm</p>
                    <p className="vista-detallada-texto">Mass: {store.unpersonaje.mass} kg</p>
                    <p className="vista-detallada-texto">Hair Color: {store.unpersonaje.hair_color}</p>
                    <p className="vista-detallada-texto">Skin Color: {store.unpersonaje.skin_color}</p>
                    <p className="vista-detallada-texto">Eye Color: {store.unpersonaje.eye_color}</p>
                    <p className="vista-detallada-texto">Birth Year: {store.unpersonaje.birth_year}</p>
                    <p className="vista-detallada-texto">Gender: {store.unpersonaje.gender}</p>
                </div>
            </div>
        </div>
    );
};
