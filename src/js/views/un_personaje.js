import React from "react";
import "../../styles/vista_detallada.css"


export const UnPersonaje = () => {



    return (
        <div className="contenerdor">
            <div className="vista-detallada mb-3">
                <img src="https://www.elplural.com/uploads/s1/13/13/11/7/the-book-of-boba-fett-ch-6-highlights-jedi-training-tall.jpeg" className="img-detalle" alt="luke con joda" />
                <div className="card-body p-3">
                    <h5 className="card-title">Aquí ira el nombre del persona </h5>
                    <p className="vista-detallada-texto">Aqui todo el texto descriptivo del personaje </p>
                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
    );
};
