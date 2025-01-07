# Todo App

A simple and intuitive **Todo Application** built with **React** and **Context API**, featuring functionalities to add, update, delete, and toggle todos. The app also supports local storage to persist data across sessions.

---

## Features

- **Add Todos:** Create new tasks with ease.
- **Edit Todos:** Modify existing tasks.
- **Mark as Complete:** Toggle completion status of tasks.
- **Delete Todos:** Remove tasks permanently.
- **Persistent Storage:** Automatically saves and retrieves todos from local storage.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Context API
- **Unique Identifiers:** UUID
- **Local Storage:** Browser's local storage API

---

## Installation

Follow these steps to run the application locally:

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
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## File Structure

```
Todo_App/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx       # Form to add todos
│   │   ├── TodoItem.jsx       # Individual todo item component
│   ├── contexts/
│   │   ├── TodoContext.js     # Context for managing todos
│   │   ├── TodoProvider.jsx   # Provider for managing todo state
│   ├── pages/
│   │   ├── App.jsx            # Main application component
│   ├── index.css              # Global styles
│   ├── index.js               # Entry point
├── package.json
├── vite.config.js             # Vite configuration file
└── README.md
```

---

## Usage

1. **Add a Todo:**
   - Enter a task in the input field.
   - Click the **Add** button to save the task.

2. **Edit a Todo:**
   - Click the ✏️ icon to enable editing.
   - Modify the task and click 📁 to save changes.

3. **Mark as Complete:**
   - Check the checkbox to mark a task as completed.

4. **Delete a Todo:**
   - Click ❌ to remove a task from the list.

---

## Screenshots

### Add and Manage Todos
![Screenshot](https://via.placeholder.com/800x400?text=Todo+App+Screenshot)

---

## Dependencies

- **React:** ^18.0.0
- **Vite:** ^4.0.0
- **Tailwind CSS:** ^3.0.0
- **uuid:** ^9.0.0

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Mihir Kharadi**

- [GitHub](https://github.com/kharadimihir)
- [LinkedIn](https://linkedin.com/in/mihir-kharadi)

