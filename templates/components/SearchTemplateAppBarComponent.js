import React, { useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Routes } from '../../Routes';
import { FontEnum } from '../../assets/styles/enums/FontEnum';

export default function SearchTemplateAppBarComponent() {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: FontEnum.backgroundColor }}>
            <Appbar.BackAction color='#fff' onPress={() => navigation.navigate(Routes.home.name)} style={{ minWidth: '10%' }} />
            <Searchbar
                placeholder="Procurar"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ minWidth: '80%' }}
            />
        </Appbar.Header>
    );
};