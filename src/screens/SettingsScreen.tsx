import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UIIcon } from '../components/UIIcon';
import { SettingsNavigationProps, SettingsRouteWithParams } from '../navigations/SettingsStackNavigation';
import { icons } from '../res/icons';

const settingsRoutes: SettingsRouteWithParams[] = [{ name: 'Profile' }, { name: 'Notification' }];

const renderItem: ListRenderItem<SettingsRouteWithParams> = ({ item }) => {
    const navigation = useNavigation<SettingsNavigationProps>();

    const onPress = useCallback(() => {
        navigation.navigate(item.name);
    }, [navigation, item]);

    return (
        <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <UIIcon icon={icons.arrowRight} height={24} width={24} />
        </TouchableOpacity>
    );
};

export const SettingsScreen: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Settings</Text>
            <FlatList data={settingsRoutes} renderItem={renderItem} />
        </View>
    );
};

// FIXME: improve styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#a9dbd5'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 16,
        marginHorizontal: 12
    },
    itemContainer: {
        marginHorizontal: 12,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 16
    }
});
