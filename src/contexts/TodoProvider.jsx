import React, { useState, useEffect} from "react";
import TodoContext from "./TodoContext";
import { v4 as uuidv4 } from 'uuid';

const TodoProvider = ({children}) => {

  const [todos, setTodos] = useState([]);


   // Function to add todo
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: uuidv4(), ...todo}]);
  };

  //Function to update todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  //Function to delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  //Function to toggle check todo
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, checked : !prevTodo.checked} : prevTodo))); 
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);


    return(
        <TodoContext.Provider  value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;