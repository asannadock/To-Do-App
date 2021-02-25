import React from 'react'

function TodoItem({ task, todo, todos, setTodos }) {
    function handleDelete() {
       setTodos(todos.filter( (item) => item.id !== todo.id))
    }

    function handleClick() {
        setTodos(todos.map( (item) => {
            // Comparing the item that is clicked to, if it has the same id as the one from state.
            if (item.id === todo.id) {
                return (
                    {...item, completed: !item.completed}
                )
            }
            return item
        }))
    }

    return (
        <div className={`todo-item ${todo.completed ? `todo-item-completed` : ''}`}>
            <div className={`todo-item-checkmark ${todo.completed ? `checkmark-checked` : ''}`} onClick={handleClick}></div>
            <p className="todo-item-text" onClick={handleClick}>{task}</p>
            <button className="todo-item-delete" onClick={handleDelete}></button>
        </div>
    )
}

export default TodoItem