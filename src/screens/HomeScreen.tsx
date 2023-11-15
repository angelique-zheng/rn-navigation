import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Home</Text>
        </SafeAreaView>
    );
};

// FIXME: improve styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b1c4e3'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});
