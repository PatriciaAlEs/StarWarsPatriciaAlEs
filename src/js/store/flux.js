const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			personajes: [],
			planetas: [],
			vehiculos: [],
			unpersonaje: [],
			unplaneta: [],
			unvehiculo: [],
			favoritos: [],
			imagenpersonaje: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			traerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(resp=>resp.json())
				.then(data => {console.log(data.results)
					setStore({ personajes: data.results }) })
				.catch(error => console.log(error))
			},

			traerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
				.then(resp => resp.json())
				.then(data => {
					setStore({ planetas: data.results})})
				.catch(error => console.log(error))
			},

			traerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
				.then(resp => resp.json())
				.then(data => setStore({ vehiculos: data.results}))
				.catch(error => console.log(error))
			}
		}
	};
};

export default getState;
