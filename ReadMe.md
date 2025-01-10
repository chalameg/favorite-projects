# React Webpack App

This project is a simple React application set up using Webpack, designed to demonstrate proficiency in modern React development with state management, mock API integration, and UI libraries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Features

- Custom Webpack setup for React.
- Uses React 18+ and its modern APIs like `createRoot`.
- Project state management via React Context (`ProjectProvider`).
- Mock API integration using Axios.
- Responsive UI using Material-UI.
- Modular architecture for scalability and maintainability.
- Editable project list with synchronized state.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Webpack**: Module bundler for managing assets and dependencies.
- **Material-UI**: Component library for UI design.
- **Axios**: HTTP client for API integration.
- **CSS-in-JS**: Styled-components for custom styles.

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the Repository:

```bash
git clone https://github.com/chalameg/favorite-projects.git
cd your-repository
npm install
npm start
```
then open localhost:3000



## project structure
```bash
react-webpack-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LeftSidebar.js
│   │   └── ProjectList.js
│   ├── context/
│   │   └── FavoriteContext.js
│   ├── pages/
│   │   ├── ProjectEdit.js
│   │   └── ProjectList.js
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .babelrc
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```
