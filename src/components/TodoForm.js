import React from 'react'

function TodoForm({ todos, setTodos, inputText, setInputText }) {
    // Defining 'todo' input state
    // const [todo, setTodo] = useState({
    //     id: "",
    //     task: "",
    //     completed: false
    // })

    function handleInputTask(e) {
        // setTodo({...todo, task: e.target.value})
        console.log(e.target.value)
        // Updating the state of inputText
        setInputText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        // checking if the todo's task is not empty by using trim function which removes white spaces from the string
        if (inputText.trim()) {
            // console.log({...todo})
            setTodos([...todos, {task: inputText, completed: false, id: (Math.random() * 100)}])
            // resetting task input field
            setInputText("")
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={handleInputTask} />
        </form>
    )
}

export default TodoForm