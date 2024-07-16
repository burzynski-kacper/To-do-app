import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>My to-do list</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        zIndex: 5
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
})