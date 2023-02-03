import HomeView from "../View/HomeView";
import SearchView from "../View/SearchView";
import FavoritesView from "../View/FavoritesView";

export const ViewRoutes = {
    home: {
        name: 'Home',
        component: HomeView
    },
    search: {
        name: 'Search',
        component: SearchView
    },
    favorites: {
        name: 'Favorites',
        component: FavoritesView
    }
};