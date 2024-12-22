# Todo Application

This repository contains a **Todo Application** built using React and Context API. The application is designed to manage tasks efficiently with features such as adding, editing, deleting, and marking todos as complete.

---

## Features

1. **Add Todos**
   - Users can add new tasks using the input form.

2. **Edit Todos**
   - Users can edit existing tasks.

3. **Delete Todos**
   - Users can delete unwanted tasks.

4. **Mark Todos as Complete**
   - Users can toggle the completion status of tasks.

5. **Persist Todos**
   - Todos are saved in the browser's localStorage to persist across page reloads.

---

## Technologies Used

- **React**: For building the user interface.
- **Context API**: For state management.
- **JavaScript**: Core programming language.
- **LocalStorage**: To persist todos across page reloads.
- **CSS**: For styling the application.

---

## File Structure

```
.
├── src
│   ├── components
│   │   ├── TodoForm.js        # Form for adding todos
│   │   ├── TodoItem.js        # Component for displaying individual todos
│   ├── contexts
│   │   ├── TodoContext.js     # Context API for todos
│   │   ├── TodoProvider.js    # Context provider
│   ├── App.js                 # Main application file
│   ├── index.js               # Application entry point
├── public
│   ├── index.html             # HTML template
├── README.md                  # Project documentation
```

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clonehttps://github.com/kharadimihir/Todo_App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-application
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Usage

1. Add a task using the input field and "Add" button.
2. Edit a task by clicking the pencil icon (✏️).
3. Mark a task as complete by toggling the checkbox.
4. Delete a task using the trash icon (❌).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the changes to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with React and Context API.
- Special thanks to all contributors and the open-source community.

---

## GitHub Repository

You can find the project repository here: [Todo Application](https://github.com/kharadimihir/todo-application)

Feel free to customize this README for your specific repository!
