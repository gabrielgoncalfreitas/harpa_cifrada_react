import FavoritesTemplate from "./templates/FavoritesTemplate";
import HomeTemplate from "./templates/HomeTemplate";
import SearchTemplate from "./templates/SearchTemplate";

export const Routes = {
    home: {
        name: 'Home',
        component: HomeTemplate
    },
    search: {
        name: 'Search',
        component: SearchTemplate
    },
    favorites: {
        name: 'Favorites',
        component: FavoritesTemplate
    }
};