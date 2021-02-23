import React from 'react'
import TodoItem from '../components/TodoItem'

function TodoList({ todos, setTodos, filteredTodos }) {
    return (
        <div className="todo-list">
            {filteredTodos.map(todo => (
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

export default TodoList