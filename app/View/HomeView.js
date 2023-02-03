import React from 'react';
import { Provider } from 'react-native-paper';
import SongListComponent from './components/SongListComponent';
import { SearchController } from '../Controller/SearchController';
import HomeAppBarComponent from './components/HomeAppBarComponent';

export default function HomeView() {
    SearchController.get();

    return (
        <Provider>
            <HomeAppBarComponent />
            <SongListComponent />
        </Provider>
    );
};