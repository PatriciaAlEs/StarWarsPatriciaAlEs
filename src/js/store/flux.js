const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			personajes: [],
			planetas: [],
			vehiculos: [],

			unpersonaje: [],
			unplaneta: [],
			unvehiculo: [],

			favorito: [],
			// favorito: JSON.parse(localStorage.getItem('favoritos')) || [], // Cargar favoritos desde localStorage
        
		},
		actions: {

			traerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(data => {

						setStore({ personajes: data.results })
					})
					.catch(error => console.log(error))
			},

			traerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => resp.json())
					.then(data => {
						setStore({ planetas: data.results })
					})
					.catch(error => console.log(error))
			},

			traerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(resp => resp.json())
					.then(data =>
						setStore({ vehiculos: data.results }))
					.catch(error => console.log(error))
			},


			obtenerDetallesPersonaje: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(resp => resp.json(
					))
					.then(data =>
						setStore({ unpersonaje: data.result.properties }))
					.catch(error => console.log(error))

			},

			obtenerDetallesPlaneta: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(resp => resp.json(
					))
					.then(data =>
						setStore({ unplaneta: data.result.properties }))
					.catch(error => console.log(error))

			},

			obtenerDetallesVehiculo: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(resp => resp.json(
					))
					.then(data =>
						setStore({ unvehiculo: data.result.properties }))
					.catch(error => console.log(error))

			},

			añadirFavoritos: (tipo, nombreFavorito) => {
				const store = getStore();
				const favorito = { tipo, nombre: nombreFavorito }; // Incluye el tipo del favorito

				if (store.favorito.some(f => f.nombre === nombreFavorito && f.tipo === tipo)) {
					setStore({
						favorito: store.favorito.filter(f => f.nombre !== nombreFavorito || f.tipo !== tipo)
					});
				} else {
					setStore({
						favorito: [...store.favorito, favorito]
					});
				}
			},

			deleteFavoritos: (tipo, nombreFavorito) => {
				const store = getStore();
				setStore({
					favorito: store.favorito.filter(f => f.nombre !== nombreFavorito || f.tipo !== tipo)
				});
			}

		}
	};
};

export default getState;
