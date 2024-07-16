import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Clipboard from 'expo-clipboard';

import Icon from 'react-native-vector-icons/AntDesign';

import { GlobalStateContext } from "../components/GlobalStateProvider";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ChosenTask({ navigation }) {
    const { toDoList, chosenTask, setToDoList } = useContext(GlobalStateContext);

    const handleDeleteTask = () => {
        // filter przechodzi przez całą tablicę i nie zapisuje do nowej oprócz wybranego taska
        const updatedToDoList = toDoList.filter(task => task.id !== chosenTask.id);
        setToDoList(updatedToDoList);
        navigation.navigate('Home');
    }

    const handleCopyTask = async () => {
        await Clipboard.setStringAsync(chosenTask.task);
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <View style={styles.textContainer}>
                    <Text style={styles.categoryText}>
                        {chosenTask.category}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {chosenTask.task}
                    </Text>
                    <View>
                        <Icon
                            name="copy1"
                            size={30}
                            color="141414"
                            onPress={() => handleCopyTask()}
                        />
                    </View>
                </View>
            </View>
            <Footer navigation={navigation}>
                <Icon 
                    name="delete"
                    size={30}
                    color="141414"
                    onPress={() => handleDeleteTask()}
                />
                <Icon 
                    name="edit"
                    size={30}
                    color="141414"
                    onPress={() => navigation.navigate('EditTask')}
                />
            </Footer>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: '#14114105',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10
    },
    text: {
        flex: 0.75,
        textAlign: 'center'
    },
    categoryText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '900',
    }
})