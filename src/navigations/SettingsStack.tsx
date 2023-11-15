import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NotificationView } from '../views/NotificationView';
import { ProfileView } from '../views/ProfileView';
import { SettingsRoutes } from './SettingsStackNavigation';

const Stack = createStackNavigator<SettingsRoutes>();

export const SettingsStack: React.FC = () => (
    <View style={styles.mainContainer}>
        <SafeAreaView style={styles.safeAreaView}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Settings"
                    options={{
                        header: () => null
                    }}
                    component={SettingsScreen}
                />
                <Stack.Screen
                    name="Profile"
                    options={{
                        headerStyle: {
                            backgroundColor: '#a9dbd5'
                        }
                    }}
                    component={ProfileView}
                />
                <Stack.Screen
                    name="Notification"
                    options={{
                        headerStyle: {
                            backgroundColor: '#a9dbd5'
                        }
                    }}
                    component={NotificationView}
                />
            </Stack.Navigator>
        </SafeAreaView>
    </View>
);

// FIXME: improve styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#a9dbd5'
    },
    safeAreaView: {
        flex: 1
    }
});
