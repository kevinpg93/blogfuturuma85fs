const getState = ({ getStore, setStore }) => {
    return {
        store: {
            characters: [],
            inventory: [],
            episodes: [],
            favorites: [],
            detailedData: null,
        },
        actions: {
            getCharacters: async () => {
                try {
                    const resp = await fetch('https://api.sampleapis.com/futurama/characters');
                    const json = await resp.json();
                    setStore({ characters: json });
                } catch (err) {
                    console.error("Error fetching characters:", err);
                }
            },
            getInventory: async () => {
                try {
                    const response = await fetch("https://api.sampleapis.com/futurama/inventory");
                    const data = await response.json();
                    setStore({ inventory: data });
                } catch (error) {
                    console.error("Error fetching inventory:", error);
                }
            },
            getEpisodes: async () => {
                try {
                    const response = await fetch("https://api.sampleapis.com/futurama/episodes");
                    const data = await response.json();
                    setStore({ episodes: data });
                } catch (error) {
                    console.error("Error fetching episodes:", error);
                }
            },
            getData: async (type, id) => {
                try {
                    const response = await fetch(`https://api.sampleapis.com/futurama/${type}`);
                    const data = await response.json();
                    // Buscar el objeto con el id correcto en el array de la API
                    const detailedItem = data.find(item => item.id === parseInt(id));
                    if (detailedItem) {
                        setStore({ detailedData: detailedItem });
                    } else {
                        console.warn(`No ${type} found with ID: ${id}`);
                        setStore({ detailedData: null });
                    }
                } catch (error) {
                    console.error(`Error fetching ${type} data:`, error);
                    setStore({ detailedData: null });
                }
            },
            addFavorite: (item, type) => {
                const store = getStore();
                const favoriteItem = { id: item.id, name: item.title || item.name?.first, type: type };
                const isFavorite = store.favorites.some(fav => fav.id === item.id && fav.type === type);
                if (isFavorite) {
                    setStore({
                        favorites: store.favorites.filter(fav => fav.id !== item.id || fav.type !== type),
                    });
                } else {
                    setStore({
                        favorites: [...store.favorites, favoriteItem],
                    });
                }
            },
            isFavorite: (id, type) => {
                const store = getStore();
                return store.favorites.some(fav => fav.id === id && fav.type === type);
            },
            removeFavorite: (id, type) => {
                const store = getStore();
                setStore({
                    favorites: store.favorites.filter(fav => fav.id !== id || fav.type !== type),
                });
            },
            navigateToFavorite: (type, id, navigate) => {
                navigate(`/${type}/${id}`);
            }
        },
    };
};
export default getState;