import React from 'react';
import { Appbar } from 'react-native-paper';
import { FontEnum } from '../../enums/FontEnum';
import { ViewRoutes } from '../../Routes/ViewRoutes';
import { useNavigation } from '@react-navigation/native';

export default function FavoritesAppBarComponent() {
    const navigation = useNavigation();

    return (
        <Appbar.Header style={{ backgroundColor: FontEnum.backgroundColor }}>
            <Appbar.BackAction color='#fff' onPress={() => navigation.navigate(ViewRoutes.home.name)} minWidth={'10%'} />
        </Appbar.Header>
    );
};