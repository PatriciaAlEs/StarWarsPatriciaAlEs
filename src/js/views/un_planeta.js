import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import "../../styles/vista_detallada.css"
import { Context } from "../store/appContext";


export const UnPlaneta = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams()

    useEffect(() => {
        actions.obtenerDetallesPlaneta(id);

    }, []);

    const imagenReserva = "https://user-images.githubusercontent.com/5948318/38711580-ea19e088-3e9c-11e8-9a02-6b46805f311d.png"
    const imagenURL = id ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : imagenReserva;


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
                    <h3 className="card-title"> {store.unplaneta.name}</h3>
                    <p className="vista-detallada-texto"> Diameter: {store.unplaneta.diameter}</p>
                    <p className="vista-detallada-texto"> Rotation period: {store.unplaneta.rotation_period} cm</p>
                    <p className="vista-detallada-texto"> Orbital period: {store.unplaneta.orbital_period} kg</p>
                    <p className="vista-detallada-texto"> Gravity: {store.unplaneta.gravity}</p>
                    <p className="vista-detallada-texto"> Population: {store.unplaneta.population}</p>
                    <p className="vista-detallada-texto"> Climate: {store.unplaneta.climate}</p>
                    <p className="vista-detallada-texto"> Terrain: {store.unplaneta.terrain}</p>
                    
                </div>
            </div>
        </div>
    )
}