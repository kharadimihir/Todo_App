# Todo App

A feature-rich Todo App built with React.js, providing a seamless user experience for managing daily tasks efficiently. The app supports CRUD operations with localStorage integration for persistent data storage.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Demo](#demo)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

## Features

- Add, edit, and delete todos.
- Mark todos as complete or incomplete.
- Persistent storage using localStorage.
- Responsive and modern UI with Tailwind CSS.
- Editable todo items with a toggleable state.
- Input validation to prevent empty tasks.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kharadimihir/Todo_App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Todo_App
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to view the app.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Context API**: For state management.
- **Tailwind CSS**: For styling the UI.
- **localStorage**: For persisting data.
- **uuid**: For generating unique IDs.

## File Structure

```plaintext
Todo_App/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   ├── contexts/
│   │   ├── TodoContext.jsx
│   │   ├── TodoProvider.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
├── package.json
├── README.md
```

## Demo

![Todo App Screenshot](https://via.placeholder.com/800x400?text=Todo+App+Screenshot)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Contact

- **GitHub**: [Mihir Kharadi](https://github.com/kharadimihir)
- **LinkedIn**: [Mihir Kharadi](https://www.linkedin.com/in/mihir-kharadi-041ab4327/)


