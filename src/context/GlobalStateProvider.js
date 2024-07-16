import React, { createContext, useState } from 'react';

// Utwórz kontekst
export const GlobalStateContext = createContext();

// Utwórz provider
export const GlobalStateProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([
    { id: 1, task: 'Brush your teeth', category: 'Self-Care' },
    { id: 2, task: 'Go for a run', category: 'Health' },
    { id: 3, task: 'Clean the kitchen', category: 'Household' },
    { id: 4, task: 'Read a book', category: 'Learning' },
    { id: 5, task: 'Watch a movie', category: 'Leisure' },
    { id: 6, task: 'Buy groceries', category: 'Shopping' },
    { id: 7, task: 'Call a friend', category: 'Social' },
    { id: 8, task: 'Finish project report', category: 'Work' },
    { id: 9, task: 'Meditate for 10 minutes', category: 'Self-Care' } ]);
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