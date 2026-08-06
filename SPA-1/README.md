# Personal Project Showcase App

A single page application built with React and Vite for showcasing
projects. You can add new projects, search through them, and delete
the ones you no longer want to show.

## Features

- Form for adding a new project
- Search bar that filters projects by title as you type
- Project card with delete button
- Responsive layout styled with Material UI and some custom CSS

## Built With

- React
- Vite
- Tailwind CSS

## Getting Started

1. Clone the repo and open the folder:
```
git clone git@github.com:David-M-Nyongesa/Project-showcase-SPA.git
cd Project-showcase-SPA
```

3. Install dependencies:
```
npm install
```
3. Run the app:
```
npm run dev
```
   Then open the link shown in the terminal (usually http://localhost:5173).

## How It Works

```
App
├── AddProjectForm (form for new projects)
├── SearchBar (search input)
└── ProjectList
└── ProjectItem (one card per project)
```
