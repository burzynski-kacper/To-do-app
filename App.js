import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { StatusBar } from 'react-native';

import { GlobalStateProvider } from './src/components/GlobalStateProvider';
import ChosenTask from './src/screens/ChosenTask';
import Home from './src/screens/Home';
import EditTask from './src/screens/EditTask';
import AddTask from './src/screens/AddTask';


const Stack = createNativeStackNavigator();

export default function App() {

  // Stary sposób bez contextu
  // // globalstate
  // const [toDoList, setToDoList] = useState([{ id: 1, task: 'brush your teeth', category: 'Personal Care' }]);
  // const [task, setTask] = useState('');
  // const [category, setCategory] = useState('');
  // const [chosenTask, setChosenTask] = useState('');

  // const GlobalState = {
  //   toDoList, setToDoList,
  //   task, setTask,
  //   category, setCategory,
  //   chosenTask, setChosenTask
  // }
  
  // nav
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" barStyle= "dark-content"  />
          <Stack.Navigator>

          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />

          <Stack.Screen name="ChosenTask" options={{ headerShown: false }} component={ChosenTask} />

          <Stack.Screen name="EditTask" options={{ headerShown: false }} component={EditTask} />

          <Stack.Screen name="AddTask" options={{ headerShown: false }} component={AddTask} />

        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateProvider>
  );
}