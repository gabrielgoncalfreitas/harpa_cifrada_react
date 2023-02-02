import React from 'react';
import { Provider } from 'react-native-paper';

import AppBar from './templates/AppBar';
import SongList from './templates/SongList';

export default function App() {
  return (
    <Provider>
      <AppBar />
      <SongList />
    </Provider>
  );
};