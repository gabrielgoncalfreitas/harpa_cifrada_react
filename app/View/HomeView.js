import React from 'react';
import { Provider } from 'react-native-paper';
import SongListComponent from './components/SongListComponent';
import HomeAppBarComponent from './components/HomeAppBarComponent';

export default function HomeView() {
    return (
        <Provider>
            <HomeAppBarComponent />
            <SongListComponent />
        </Provider>
    );
};