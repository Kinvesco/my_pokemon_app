# Welcome to My Pokemon App
Welcome to My Pokémon App! This is a ReactJS application that allows you to explore information about various Pokémon.
You can browse a list of Pokémon, view their details, and even search for specific Pokémon.

## Task
The main challenge of this project was to efficiently fetch data from an external Pokémon API, implement lazy loading for the list of Pokémon, create a detailed page for each Pokémon, implement search functionality, and handle potential errors gracefully.

## Description
We have addressed this challenge by following these key steps:

API Integration: We used Axios to fetch data from the PokéAPI. We also implemented error handling for various scenarios.

Display All Pokémon: We created a component that displays the list of Pokémon with lazy loading for better performance.

Pokémon Detail Page: We designed a separate page to display detailed information about a specific Pokémon, which can be accessed by clicking on a Pokémon in the list.

Search Functionality: We implemented a search bar that allows users to search for Pokémon by name or other criteria. The search results are dynamically updated as the user types.

Styling: Each component has its associated CSS file for styling. We used CSS Modules for scoped styling.

Error Handling: We handle errors gracefully, displaying informative messages to users for scenarios such as no internet connection or failed API requests.

## Installation
npx create app. was used to create the Reactjs app,
npm install react-infinite-scroll-component is used to initialize infinite scrolling/ lazy loading
npm install react-router-dom is ran to make it a multiple page app

## Usage
To use My Pokémon App, follow these steps:

Open the app in your web browser by visiting the deployed URL.

Browse Pokémon: You can scroll through the list of Pokémon displayed on the main page. Lazy loading ensures a smooth experience, even with a large number of Pokémon.

View Pokémon Details: Click on a Pokémon card to view detailed information about that specific Pokémon.

Search Pokémon: Use the search bar at the top to search for Pokémon by name or other criteria. The list of Pokémon will update in real-time as you type.

Features
Display a list of Pokémon with lazy loading.
View detailed information about individual Pokémon.
Search for Pokémon by name or criteria.
Error handling for network issues and bad API requests.
Responsive and user-friendly design.
Project Structure

./my_project argument1 argument2
```

### The Core Team
ajagu_k

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>

