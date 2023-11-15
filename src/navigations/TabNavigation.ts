import { RouteProp } from '@react-navigation/native';
import { icons } from '../res/icons';
import { HomeScreen } from '../screens/HomeScreen';
import { MusicScreen } from '../screens/MusicScreen';
import { SettingsStack } from './SettingsStack';

export type TabRoutes = {
    home: undefined;
    music: undefined;
    settings: undefined;
};

export type TabRoutesProps = RouteProp<TabRoutes>;

export interface TabNavigationItem {
    name: keyof TabRoutes;
    component: React.FC<any>;
    icon: string;
    iconActive: string;
    displayName: string;
}

export const TabNavigation: { [K in keyof TabRoutes]: TabNavigationItem } = {
    home: {
        name: 'home',
        component: HomeScreen,
        icon: icons.homeInactive,
        iconActive: icons.homeActive,
        displayName: 'Home'
    },
    music: {
        name: 'music',
        component: MusicScreen,
        icon: icons.musicInactive,
        iconActive: icons.musicActive,
        displayName: 'Music'
    },
    settings: {
        name: 'settings',
        component: SettingsStack,
        icon: icons.settingsInactive,
        iconActive: icons.settingsActive,
        displayName: 'Settings'
    }
};
