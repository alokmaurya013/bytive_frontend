
---
# Frontend Todo Application

This is a simple Todo application built with React and styled using Tailwind CSS. It allows users to add, edit, and manage tasks, with their status updated between "Pending" and "Completed".
Live URL:https://precious-pothos-44fd61.netlify.app/
## Features

- **Add Task**: Allows the user to add a new task with a title and status.
- **Edit Task**: Edit an existing task's title and status.
- **Task List**: View the list of tasks with the option to mark them as completed or pending.
- **Responsive**: Built to be fully responsive using Tailwind CSS.
- **State Management**: Uses Redux for state management.

## Technologies Used

- **React**: Frontend framework.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Redux**: For state management of tasks.
- **React Router**: For routing and navigation within the application.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/alokmaurya013/bytive_frontend.git
```

### 2. Install dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd bytive_frontend
npm install
```

### 3. Run the application

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

This will start the app on `http://localhost:3000` by default.

## Folder Structure

```plaintext
src/
  ├── components/
  │   ├── TaskForm.js        # Task form component for Add/Edit tasks
  │   └── Header.js          # Header component
  │   └── Footer.js          # Footer component
  ├── pages/
  │   ├── AddTask.js         # Add Task page
  │   └── EditTask.js        # Edit Task page
  │   └── Home.js            # Home page displaying the list of tasks
  ├── redux/
  │   ├── store.js           # Redux store configuration
  │   └── todoSlice.js       # Redux slice for tasks
  ├── App.js                 # Main app file with routes
  ├── index.js               # Entry point for React app
  └── index.css              # Global styles using Tailwind CSS
```

## Usage

Once the app is running, you can:

- **Add a new task**: Go to the "Add Task" page and enter a task title and status.
- **Edit a task**: Click on any task in the list to edit it.
- **Task status**: Toggle the task status between "Pending" and "Completed" from the task editing page.

## Contributing

If you'd like to contribute to this project, feel free to open a pull request with improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

### Notes:

1. Replace the GitHub URL with the actual repository URL if needed.
2. You may modify the section regarding folder structure if the project structure changes.
3. This README assumes that the user is familiar with basic npm commands and React.
