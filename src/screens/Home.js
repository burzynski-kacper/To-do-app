import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/AntDesign';

import { GlobalStateContext } from "../context/GlobalStateProvider";
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Home({ navigation }) {
    const { toDoList, setChosenTask } = useContext(GlobalStateContext);

    const [search, setSearch] = useState('');
    const [filteredToDoList, setFilteredToDoList] = useState(toDoList);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        let filteredList = toDoList;

        if (search !== '') {
            filteredList = filteredList.filter(item => item.task.toLowerCase().includes(search.toLowerCase()));
        }

        if (selectedCategory !== '') {
            filteredList = filteredList.filter(item => item.category === selectedCategory);
        }

        setFilteredToDoList(filteredList);
    }, [search, selectedCategory, toDoList]);

    const renderItemFun = ({ item }) => {
        return(
        <TouchableOpacity
            style={styles.task}
            onPress={() => handleChooseTask(item)}
        >
            <Text>{item.task}</Text>
        </TouchableOpacity>
        )
    }

    const handleChooseTask = (item) => {
        setChosenTask(item);
        navigation.navigate('ChosenTask');
    }

    return (
        <View style={styles.screen}>
            <Header />
            
            <View style={styles.body}>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="Search task..."
                    onChangeText={(value) => setSearch(value)}
                    value={search}
                    />
                    <View>
                        <Icon
                            name="search1"
                            size={30}
                            color="141414"
                        />
                    </View>
                </View>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                >
                    <Picker.Item label="All" value="" />
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
                    onPress={() => navigation.navigate('AddTask')}
                >
                    <Text style={styles.buttonText}>Add new task</Text>
                </TouchableOpacity>

                <FlatList
                    data={filteredToDoList}
                    renderItem={renderItemFun}
                    keyExtractor={item => item.id}
                />
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
    task: {
        backgroundColor: 'white',
        padding: 10,
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