import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoActions from './components/TodoActions'
import './App.css'

function App() {
    // Creating a state for inputs
    const [inputText, setInputText] = useState('')
    // Creating a state to store all todos. We gonna have an array of objects ([]). And we gona add inputText to this todos array by form submit in the TodoForm component
    const [todos, setTodos] = useState([])

    // Adding a new todo to the list
    // function addTodo(todo) {
    //     // Creating a new todos array by calling the setTodo function and passing in an array with the new todo, add it to the beginning and the old todos array spread over it
    //     setTodos([todo, ...todos])
    // } 

    return (
        <div className="App">
            <Header />
            {/* Passing our new addTodo function to the todoForm component as a prop */}
            <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
            <TodoList todos={todos} />
            <TodoActions />
            <Footer />
        </div>
    )        
}

export default App