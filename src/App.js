import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import todosData from './todosList'
import './App.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map( todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoElements = this.state.todos.map ( todoItem => <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} completed={todoItem.completed} handleChange={this.handleChange} /> )

        return (
            <div className="App">
                <Header />
                <TodoForm />
                <div className="todo-list">
                    {todoElements}
                </div>
                <Footer />
            </div>
        )        
    }
}

export default App