# My React Native To-Do App

## Overview

This is a React Native application designed to help users manage their daily tasks efficiently. The app allows users to add, search, and filter tasks based on different categories. It leverages modern React features such as hooks and context to manage state and provide a seamless user experience.

## Features

- **Add Tasks**: Users can add new tasks with a description and category.
- **Edit Tasks**: Users can edit tasks with a description and category.
- **Delete Tasks**: Users can delete tasks.
- **Search Tasks**: Users can search for tasks using a search bar.
- **Filter Tasks**: Users can filter tasks by categories such as Health, Household, Learning, Leisure, Self-Care, Shopping, Social, and Work.
- **Responsive UI**: The app features a responsive and user-friendly interface.

## Technologies Used

- **React Native**: For building the mobile application.
- **React Hooks**: For managing state and side effects.
- **React Context**: For global state management.
- **PropTypes**: For props validation.
- **react-native-vector-icons**: For icons.

## Screenshots

<style>
        table {
            margin: 0 auto; /* Wyśrodkowanie tabeli */
            border-collapse: collapse; /* Usunięcie odstępów między komórkami */
        }
        td {
            text-align: center; /* Wyśrodkowanie zawartości komórek */
            border: none; /* Usunięcie obramowania komórek */
            padding: 10px; /* Dodanie odstępu wewnętrznego dla lepszego wyglądu */
        }
    </style>

<table>
  <tr>
    <td><h3>Home Screen</h3></td>
    <td><h3>Home Screen With Filter</h3></td>
    <td><h3>Home Screen With Search</h3></td>
  </tr>
  <tr>
    <td><img src="screenshots/HomeScreen.jpg" alt="Home Screen" width="250"/></td>
    <td><img src="screenshots/HomeScreenWithFilter.jpg" alt="Home Screen With Filter" width="250"/></td>
    <td><img src="screenshots/HomeScreenWithSearch.jpg" alt="Home Screen With Search" width="250"/></td>
  </tr>
  <tr>
    <td><h3>Add Screen</h3></td>
    <td><h3>Chosen Task Screen</h3></td>
    <td><h3>Edit Screen</h3></td>
  </tr>
  <tr>
    <td><img src="screenshots/AddScreen.jpg" alt="Add Screen" width="250"/></td>
    <td><img src="screenshots/ChosenTaskScreen.jpg" alt="Chosen Task Screen" width="250"/></td>
    <td><img src="screenshots/EditScreen.jpg" alt="Edit Screen" width="250"/></td>
  </tr>
</table>


## Code Structure

- **components/**: Contains all the reusable components.
- **screens/**: Contains the main screens of the app.
- **context/**: Contains the context and provider for global state management.

## Acknowledgements

- Icons provided by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

