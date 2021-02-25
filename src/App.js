import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoActions from './components/TodoActions'
import './App.scss'

function App() {
    let n
    // STATES
    // create a state for inputs
    const [inputText, setInputText] = useState('')
    // create a state to store all todos. We gonna have an array of objects ([]). And we gonna add inputText to this todos array by submit the form in the TodoForm component
    const [todos, setTodos] = useState([])
    // create a state for the status of the filter
    const [status, setStatus] = useState('all')
    // create a state to store filtered todos. We need to have this because if we use filter 'completed' or 'active' which remove the todos that are not filtered, then we need to store them somewhere, and it is the initial 'todos' state ( const [todos, setTodos] = useState([]))
    const [filteredTodos, setFilteredTodos] = useState([])
    // create state for the active items, i.e. items left to complete
    const [itemsLeftToComplete, setItemsLeftToComplete] = useState(n)
    // create state for color theme
    const [theme, setTheme] = useState('light')

    // USE EFFECT
    // run only once when the app first loads
    useEffect(() => {
        getLocalTodos()
        getThemeFromLocalStorage()
        }, []
    )
    // run once the app first loads and when we add input items (todos) and use filter (status)
    useEffect(() => {
        handleFilter()
        saveToLocalStorage()
        saveThemeToLocalStorage()
        getActiveTodos()
        }, [todos, status, theme]
    )

    // FUNCTIONS AND EVENTS
    // handle todos filter - all, active, completed. The default filter status is 'all'. 
    function handleFilter() {
        switch(status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break
            case 'active':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break
            default:
                setFilteredTodos(todos)
                break            
        }
    }
    // get the number of active todos
    function getActiveTodos() {
        setItemsLeftToComplete(todos.filter(todo => todo.completed === false).length)
    }

    // SAVE TO LOCAL STORAGE
    // We need to store our todos list in a local storage in order it to keep it in a browser after refreshing the app.
    // In order to do this we need 1) to store the data in localStorage, 2) to parse the localStorage and load it in uesEffect ones the app first loads
    // This function store the data to the localStorage. And we need this function to run in useEffect, so that data stores in local storage ones the app loads and ones the 'todos' and 'status' change.
    function saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    function saveThemeToLocalStorage() {
        if (theme === 'light') {
            localStorage.setItem('theme', JSON.stringify('light'))
        } else if (theme === 'dark') {
            localStorage.setItem('theme', JSON.stringify('dark'))
        }
    }

    function getThemeFromLocalStorage() {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', JSON.stringify(''))
        } else {
            let themeLocal = JSON.parse(localStorage.getItem('theme'))
            setTheme(themeLocal)
        }  
    }

    // We need this function in order to load the data from the localStorage. And we should run this function in useEffect only ones the app loads, that's why we have to use one more useEffect
    function getLocalTodos() {
        // check if there are todos to store. If not - then just add an empty array
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todosLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todosLocal)
        }
    }

    return (
        <div className={`App App-theme-${theme}`}>
            <Header 
                theme={theme}
                setTheme={setTheme} 
            />
            <div className="todo-body">
                <TodoForm 
                    todos={todos} 
                    setTodos={setTodos} 
                    inputText={inputText} 
                    setInputText={setInputText}
                />
                <TodoList 
                    todos={todos} 
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />
                <TodoActions 
                    todos={todos} 
                    setTodos={setTodos}
                    status={status}
                    setStatus={setStatus} 
                    itemsLeftToComplete={itemsLeftToComplete} 
                />
            </div>
            <Footer />
        </div>
    )        
}

export default App