import React, { useContext, useEffect } from "react";
import "../../styles/vista_detallada.css";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const UnVehiculo = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams()

    const imagenReserva = "https://user-images.githubusercontent.com/5948318/38711580-ea19e088-3e9c-11e8-9a02-6b46805f311d.png"
    const imagenURL = id ? `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg` : imagenReserva;

    useEffect(() => {
        actions.obtenerDetallesVehiculo(id);

    }, []);

    return (
        <div className="contenerdor">
            <div className="vista-detallada mb-3 row">
                <div className="divimagen col-12 col-sm-6 col-lg-6">
                    <img
                        src={imagenURL}
                        className="img-detalle"
                        alt="detalle vehiculo StarWars"
                        onError={(e) => e.target.src = imagenReserva}
                    />
                </div>

                <div className="card-body p-3 col-12 col-sm-6 col-lg-6">

                    <h3 className="card-title"> Name: {store.unvehiculo.name}</h3>
                    <p className="vista-detallada-texto"> Model: {store.unvehiculo.model}</p>
                    <p className="vista-detallada-texto"> Starship Class: {store.unvehiculo.starship_class} </p>
                    <p className="vista-detallada-texto"> Manufacturer {store.unvehiculo.manufacturer} kg</p>
                    <p className="vista-detallada-texto"> Cost in Credits: {store.unvehiculo.cost_in_credits}</p>
                    <p className="vista-detallada-texto"> Passengers: {store.unvehiculo.passengers}</p>
                    <p className="vista-detallada-texto"> Cargo capacity: {store.unvehiculo.cargo_capacity}</p>


                </div>
            </div>
        </div>
    )
}