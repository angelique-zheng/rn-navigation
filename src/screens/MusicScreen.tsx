import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MusicScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.text}>Music</Text>
        </SafeAreaView>
    );
};

// FIXME: improve styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f08c'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});
