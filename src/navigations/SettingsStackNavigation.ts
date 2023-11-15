import { StackNavigationProp } from '@react-navigation/stack';

export type SettingsRoutes = {
    Settings: undefined;
    Profile: undefined;
    Notification: undefined;
};

export type SettingsNavigationProps = StackNavigationProp<SettingsRoutes>;

export type SettingsRouteWithParams<RouteName extends keyof SettingsRoutes = keyof SettingsRoutes> = {
    name: RouteName;
    params?: SettingsRoutes[RouteName];
};
