import React, { useState } from 'react';
import { FontEnum } from '../../enums/FontEnum';
import { ViewRoutes } from '../../Routes/ViewRoutes';
import { Appbar, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SearchAppBarComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: FontEnum.backgroundColor }}>
            <Appbar.BackAction color='#fff' onPress={() => navigation.navigate(ViewRoutes.home.name)} style={{ minWidth: '10%' }} />
            <Searchbar
                placeholder="Procurar"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ minWidth: '80%' }}
            />
        </Appbar.Header>
    );
};