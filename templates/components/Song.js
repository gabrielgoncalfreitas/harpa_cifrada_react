import { useState } from 'react';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Song(props) {
    const [favoriteIcon, setFavoriteIcon] = useState('star-outline');
    const [favorite, setFavorite] = useState(false);

    function favoriteSong() {
        setFavoriteIcon('star');
        setFavorite(true);
    }

    function unfavoriteSong() {
        setFavoriteIcon('star-outline');
        setFavorite(false);
    }

    function toggle() {
        if (favorite === true) {
            unfavoriteSong();
        } else {
            favoriteSong();
        }
    }

    return (
        <View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 15,
                borderBottomColor: '#BCBCBC',
                borderBottomWidth: 0.5
            }}>
                <View>
                    <Text style={{ fontSize: 18 }}>
                        {props.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#7E7E7E' }}>
                        {props.author}
                    </Text>
                </View>

                <IconButton
                    icon={favoriteIcon}
                    size={30}
                    onPress={toggle}
                    style={{ paddingEnd: 0 }}
                />
            </View>
        </View>
    );
}