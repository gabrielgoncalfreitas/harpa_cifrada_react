import React, { useState } from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { Routes } from '../../Routes';
import { FontEnum } from '../../assets/styles/enums/FontEnum';

export default function FavoritesTemplateAppBarComponent() {
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: FontEnum.backgroundColor }}>
            <Appbar.BackAction color='#fff' onPress={() => navigation.navigate(Routes.home.name)} minWidth={'10%'} />
        </Appbar.Header>
    );
};