import React from "react";
import "../../styles/personaje_card.css"


export const PersonajeCard = ({name,height}) => {
    console.log("Name:", name);
    console.log("Height:", height);


    return (
        <div>
		<div className="card" style={{width: "18rem"}}>
			<img src="https://www.ikea.com/es/en/images/products/kopparfall-picture-moonscape__0997459_pe822680_s5.jpg?f=s" 
			className="card-img-top" 
			alt="hombre y luna"/>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{height}</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
		</div>
        </div>
    )
}