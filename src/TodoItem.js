import React from 'react'

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={() => props.handleChange(props.id)} 
            />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem