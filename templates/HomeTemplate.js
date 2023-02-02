import React from 'react';
import { Provider } from 'react-native-paper';

import HomeTemplateAppBarComponent from './components/HomeTemplateAppBarComponent';
import SongListComponent from './components/SongListComponent';

export default function HomeTemplate() {
    return (
        <Provider>
            <HomeTemplateAppBarComponent />
            <SongListComponent />
        </Provider>
    );
};