const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		characters: [],
		planets: [],
		images: {
			"planet1":"https://mpudata.sfo2.digitaloceanspaces.com/original/2X/6/6f7d37cd5f7ef08a2a17602e0aa6ad3a6880d747.jpeg"
		},
	  },
	  actions: {
		loadPlanets: async () => {
		  const response = await fetch("https://www.swapi.tech/api/planets");
		  if (response.status === 200) {
			const payload = await response.json();
			const myModifiedPlanets = payload.results.map((p) => {
			  p.type = "planet";
			  return p;
			});
			setStore({ planets: myModifiedPlanets });
		  }
		},
		loadCharacters: async () => {
		  const response = await fetch("https://www.swapi.tech/api/people");
		  if (response.status === 200) {
			const payload = await response.json();
			const myModifiedCharacters = payload.results.map((c) => {
			  c.type = "people";
			  return c;
			});
			setStore({ characters: myModifiedCharacters });
		  }
		},
		addFavorites: (entity) => {
		  const store = getStore();
		  const newFavorite = [...store.favorites, entity];
		  setStore({ favorites: newFavorite });
		},
		deleteFavorite: (favorite) => {
		  const store = getStore();
		  console.log("this is what I pretend to delete", favorite);
		  setStore({
			favorites: store.favorites.filter(
			  (item) => favorite.name !== item.name
			),
		  });
		  console.log("finish deleting the favorite");
		},
	  },
	};
  };
  
  export default getState;