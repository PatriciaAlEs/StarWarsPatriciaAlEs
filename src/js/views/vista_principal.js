import React, { useEffect } from "react";
import "../../styles/vista_principal.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

import { PersonajeCard } from "../component/personaje_card";
import { PlanetaCard } from "../component/planeta_card";
import { VehiculoCard } from "../component/vehiculo_card";




export const VistaPrincipal = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.traerPersonajes()
		actions.traerPlanetas()
		actions.traerVehiculos()
	},
		[])

	return (
		<div className="fondoprincipal text-center ">
			
			<h1><i className="fa-solid fa-jedi"></i> Hola Star Wars!<i className="fa-solid fa-jedi"></i></h1>

			<h2> Personajes </h2>
			<div className="fondoprincipal2">
				{store.personajes?.map((personaje, index) => (
					<PersonajeCard 
					key={index} 
					name={personaje.name} 
					height={personaje.height}
					/>
				))}
			</div>
			<h2> Vehiculos </h2>
			<div className="fondoprincipal2">
				{store.vehiculos?.map((vehiculo, index) => (
					<VehiculoCard 
					key={index} 
					name={vehiculo.name} />
				))}
			</div>
			<h2> Planetas </h2>
			<div className="fondoprincipal2">
				{store.planetas?.map((planeta, index) => (
					<PlanetaCard 
					key={index} 
					name={planeta.name} />
				))}
			</div>
			
		</div>
		
	)
};
