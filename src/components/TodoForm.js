import React from 'react'
import { v4 as uuidv4 } from 'uuid'

function TodoForm({ todos, setTodos, inputText, setInputText }) {
    function handleInputTask(e) {
        // Updating the state of inputText
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // checking if the todo's task is not empty by using trim function which removes white spaces from the string
        if (inputText.trim()) {
            setTodos([...todos, {task: inputText, completed: false, id: uuidv4()}])
            // resetting task input field
            setInputText("")
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Create a new todo..." value={inputText} onChange={handleInputTask} />
        </form>
    )
}

export default TodoForm