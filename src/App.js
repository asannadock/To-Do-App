import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoActions from './components/TodoActions'
import './App.css'

function App() {
    return (
        <div className="App">
            <Header />
            <TodoForm />
            <TodoList />
            <TodoActions />
            <Footer />
        </div>
    )        
}

export default App