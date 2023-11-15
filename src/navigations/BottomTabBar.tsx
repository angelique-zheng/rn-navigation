import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UIIcon } from '../components/UIIcon';
import { TabNavigation, TabRoutes, TabRoutesProps } from './TabNavigation';

const Tab = createBottomTabNavigator<TabRoutes>();

export const BottomTabBar: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={CustomBottomTabBar}>
                {Object.values(TabNavigation).map(navItem => (
                    <Tab.Screen
                        options={{
                            header: () => null
                        }}
                        name={navItem.name}
                        component={navItem.component}
                        key={navItem.name}
                    />
                ))}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export const CustomBottomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation, descriptors, insets }) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => (
                <CustomBottomTabBarItem
                    route={route as TabRoutesProps}
                    index={index}
                    state={state}
                    descriptors={descriptors}
                    navigation={navigation}
                    insets={insets}
                    key={route.key}
                />
            ))}
        </View>
    );
};

interface CustomBottomTabBarItemProps extends BottomTabBarProps {
    route: TabRoutesProps;
    index: number;
}

export const CustomBottomTabBarItem: React.FC<CustomBottomTabBarItemProps> = ({ state, index, navigation, route }) => {
    const isFocused = useMemo(() => state.index === index, [state.index, index]);
    const navItem = useMemo(() => TabNavigation[route.name], [route.name]);

    const onPress = useCallback(() => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
        });
        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    }, [navigation, isFocused, route]);

    const icon = useMemo(() => (isFocused ? navItem.iconActive : navItem.icon), [navItem, isFocused]);

    return (
        <TouchableOpacity style={styles.tabBarItemContainer} onPress={onPress}>
            <UIIcon icon={icon} height={35} width={35} />
            <Text>{navItem.displayName}</Text>
        </TouchableOpacity>
    );
};

// FIXME: improve styling
const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 24,
        marginBottom: 24,
        marginTop: 16
    },
    tabBarItemContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flexBasis: 0,
        flexGrow: 1
    }
});
