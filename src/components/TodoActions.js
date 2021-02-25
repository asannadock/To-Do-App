import React from 'react'

function TodoActions({ todos, setTodos, status, setStatus, itemsLeftToComplete }) { 
    function handleClick(e) {
        setStatus(e.target.value)
    }

    function handleClearCompleted() {
        setTodos(todos.filter(todo => todo.completed === false))
    }

    return (
        <div className="todo-actions">            
            <div className="count">{itemsLeftToComplete} {itemsLeftToComplete === 1 ? `item` : `items`} left</div>
            <div className="filter">
                <button className={`all ${status === 'all' ? `selected` : ``}`} value="all" onClick={handleClick}>All</button>
                <button className={`active ${status === 'active' ? `selected` : ``}`} value="active" onClick={handleClick}>Active</button>
                <button className={`completed ${status === 'completed' ? `selected` : ``}`} value="completed" onClick={handleClick}>Completed</button>
            </div>
            <div className="clear-completed">
                <button value="" onClick={handleClearCompleted}>Clear Completed</button>
            </div>            
        </div>
    )
}

export default TodoActions