import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Divider, Menu, Tooltip } from 'react-native-paper';

export default function AppBar() {
    const [visible, setVisible] = useState(false);

    function openMenu() {
        return setVisible(true);
    }

    function closeMenu() {
        return setVisible(false);
    }

    return (
        <Appbar.Header style={{ backgroundColor: FontEnum.backgroundColor }}>
            <View style={[styles.center, { marginLeft: 5 }]}>
                <Appbar.Content
                    title='Harpa Cifrada'
                    titleStyle={{
                        color: FontEnum.white,
                        textAlign: 'left'
                    }}
                />
            </View>

            <View style={styles.center}>
                <Appbar.Action
                    icon='magnify'
                    iconColor={FontEnum.white}
                    onPress={() => { }} />

                <Appbar.Action
                    icon='heart'
                    iconColor={FontEnum.white}
                    onPress={() => { }} />

                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Tooltip title="Selected Camera">
                            <Appbar.Action
                                icon='dots-vertical'
                                iconColor={FontEnum.white}
                                onPress={openMenu} />
                        </Tooltip>
                    }
                >
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="Sobre" />
                </Menu>
            </View>
        </Appbar.Header>
    );
};

const FontEnum = {
    backgroundColor: '#1554F6',
    white: '#fff'
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});