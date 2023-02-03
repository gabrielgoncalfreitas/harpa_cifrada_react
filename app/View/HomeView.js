import React from 'react';
import { Provider } from 'react-native-paper';
import SongListComponent from './components/SongListComponent';
import HomeAppBarComponent from './components/HomeAppBarComponent';
import { SearchController } from '../Controller/SearchController';

export default function HomeView() {
    // SearchController.get

    return (
        <Provider>
            <HomeAppBarComponent />
            <SongListComponent />
        </Provider>
    );
};