import React from 'react'
import TodoItem from '../components/TodoItem'
// import todosData from '../todosList'

function TodoList({ todos, setTodos }) {
    return (
        <div className="todo-list">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    task={todo.task}
                    todo={todo}
                    todos={todos} 
                    setTodos={setTodos} 
                />
            ))}
        </div>
    )
}
// class TodoList extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map( todo => {
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }

//     render() {
//         const todoElements = this.state.todos.map ( todoItem => <TodoItem key={todoItem.id} id={todoItem.id} text={todoItem.text} completed={todoItem.completed} handleChange={this.handleChange} /> )

//         return (
//             <div className="todo-list">
//                 {todoElements}
//             </div>
//         )        
//     }
// }

export default TodoList