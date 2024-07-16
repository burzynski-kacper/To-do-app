import React, { createContext, useState } from 'react';

// Utwórz kontekst
export const GlobalStateContext = createContext();

// Utwórz provider
export const GlobalStateProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([{ id: 1, task: 'Brush your teeth', category: 'Self-Care' }]);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  return (
    <GlobalStateContext.Provider value={{
      toDoList, setToDoList,
      task, setTask,
      category, setCategory,
      chosenTask, setChosenTask
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};