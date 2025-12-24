📝 Task Management Dashboard

This project is a simple yet complete Task Management Dashboard built using React, Redux Toolkit, and Tailwind CSS.
The goal of this project was to practice building a real-world frontend application with proper state management, async logic, and clean UI design.

The app allows users to manage daily tasks, filter and search them easily, and switch between light and dark themes — all with a smooth and responsive user experience.

✨ What this app can do

Add new tasks with a title

Edit existing tasks

Delete tasks

Mark tasks as Completed or Pending

Filter tasks (All / Completed / Pending)

Search tasks by title

Toggle between Light Mode and Dark Mode

Persist tasks and theme even after refreshing the page

🛠 Tech Stack Used

React (with Vite)

Redux Toolkit for state management

React Redux

Tailwind CSS for styling

JavaScript (ES6+)

LocalStorage for persistence

🧠 How state is managed

Global state is handled using Redux Toolkit.

Tasks and theme state are stored in Redux

Async actions (fetching, adding, updating, deleting tasks) are handled using createAsyncThunk

A mock API layer is used to simulate real backend behavior

Redux state is persisted to the browser using localStorage

On app load, Redux hydrates its state from stored data

This setup keeps UI logic clean and makes the app feel close to a production setup.

🌐 Mock API

Instead of using a real backend, this project includes a mock API built with async functions and artificial delays.

This helps simulate:

Fetching tasks

Creating tasks

Updating tasks

Deleting tasks

It also helps demonstrate how Redux async flows work in real applications.

🎨 UI & Theme

The UI is built using Tailwind CSS with a mobile-first approach.

Clean, card-based layout

Responsive across mobile, tablet, and desktop

Separate color handling for light and dark modes

Theme state is managed globally using Redux

The design focuses on clarity and usability rather than over-styling.

📂 Project Structure:

I’ve organized the project so that each part of the application has a clear responsibility, which makes the code easier to understand and maintain.

The api folder contains mock backend functions. These functions simulate real API calls like fetching, adding, updating, and deleting tasks.

Inside the Features folder, I’ve grouped Redux logic by domain:

The tasks folder manages all task-related state and async logic.

The theme folder handles light and dark mode state.

The components folder contains reusable UI components such as the task form, task card, filters, and the theme toggle button.

The app folder contains the Redux store configuration, where all reducers are combined and state persistence is handled.

App.jsx acts as the main layout and connects different parts of the UI.

main.jsx is the entry point where React and Redux are wired together.

index.css contains Tailwind CSS directives and global styles.

This structure keeps UI, state management, and API logic clearly separated and makes the project easy to scale.

How to run this project locally

Clone the repository:

git clone <your-repo-link>

Go to the project folder:

cd task-dashboard

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app in your browser:

http://localhost:5173
