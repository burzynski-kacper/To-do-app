import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { GlobalStateContext } from "../components/GlobalStateProvider";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddTask({ navigation }) {

    const { toDoList, setToDoList, task, setTask, category, setCategory } = useContext(GlobalStateContext);


    const handleSaveTask = () => {
        const index = toDoList.length + 1;

        setToDoList(prevState => [...prevState, { id: index, task: task, category: category }]);
        setTask('');
        setCategory('');
        navigation.navigate('Home');
    }

    return(
        <View style={styles.screen}>
            <Header />
                <View style={styles.body}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Task name..."
                            onChangeText={setTask}
                            value={task}
                        />
                    </View>

                    <Picker
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                >
                    <Picker.Item label="Choose" value="" />
                    <Picker.Item label="Health" value="Health" />
                    <Picker.Item label="Household" value="Household" />
                    <Picker.Item label="Learning" value="Learning" />
                    <Picker.Item label="Leisure" value="Leisure" />
                    <Picker.Item label="Self-Care" value="Self-Care" />
                    <Picker.Item label="Shopping" value="Shopping" />
                    <Picker.Item label="Social" value="Social" />
                    <Picker.Item label="Work" value="Work" />

                </Picker>

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => handleSaveTask()}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>

                </View>
                <Footer navigation={navigation}/>
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
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#141414',
        alignItems: 'center',
        padding: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontWeight: '900'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    input: {
        flex: 1,
    },
})