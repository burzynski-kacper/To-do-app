import { StyleSheet, View } from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';

export default function Footer({ navigation, children }) {
    return(
        <View style={styles.footer}>
            {children && children[0]}
            <Icon 
                name="home"
                size={30}
                color="141414"
                onPress={() => navigation.navigate('Home')}
            />
            {children && children[1]}
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
})