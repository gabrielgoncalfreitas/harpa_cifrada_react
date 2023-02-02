import HomeView from "./app/View/HomeView";
import SearchView from "./app/View/SearchView";
import FavoritesView from "./app/View/FavoritesView";

export const Routes = {
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