import React from 'react'

function TodoActions() {
    return (
        <div className="todo-actions">
            <div className="count">... items left</div>
            <div className="filter">
                <p className="all">All</p>
                <p className="active">Active</p>
                <p className="completed">Completed</p>
            </div>
            <div className="clear-completed">Clear Completed</div>
        </div>
    )
}

export default TodoActions