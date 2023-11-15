import { StyleSheet, Text, View } from 'react-native';

export const NotificationView: React.FC = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.text}>Notification</Text>
        </View>
    );
};

// FIXME: improve styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a9dbd5'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
});
