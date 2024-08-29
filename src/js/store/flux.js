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

			añadirFavoritos: (nombreFavorito) => {
				const store = getStore();
				
				if (store.favorito.includes(nombreFavorito)) {
					setStore({
						favorito: store.favorito.filter(repetido => repetido != nombreFavorito)
					})
				} else {
					setStore({
						favorito: [...store.favorito, nombreFavorito]
					}) 
					console.log(store.favorito)
				}

			}
			// añadirFavoritos: (nombreFavorito) => {
            //     const store = getStore();
            //     let nuevosFavoritos;

            //     if (store.favorito.includes(nombreFavorito)) {
            //         nuevosFavoritos = store.favorito.filter(repetido => repetido !== nombreFavorito);
            //     } else {
            //         nuevosFavoritos = [...store.favorito, nombreFavorito];
            //     }

            //     setStore({
            //         favorito: nuevosFavoritos
            //     });

            //     // Guardar favoritos en localStorage
            //     localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
            // }
		}
	};
};

export default getState;
