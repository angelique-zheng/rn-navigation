import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabBar } from './navigations/BottomTabBar';

export const App: React.FC = () => {
    return (
        <SafeAreaProvider>
            <BottomTabBar />
        </SafeAreaProvider>
    );
};
