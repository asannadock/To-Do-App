import React from 'react'

function TodoItem({ task, todo, todos, setTodos }) {
    function handleDelete() {
       setTodos(todos.filter( (item) => item.id !== todo.id))
    }

    function handleChange() {
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

    const completedTextStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={handleChange} />
            <p style={todo.completed ? completedTextStyle : null}>{task}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}




// const TodoItem = (props) => {
//     const completedTextStyle = {
//         fontStyle: "italic",
//         color: "#cdcdcd",
//         textDecoration: "line-through"
//     }
//     return (
//         <div className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.completed}
//                 onChange={() => props.handleChange(props.id)} 
//             />
//             <p style={props.completed ? completedTextStyle : null}>{props.text}</p>
//         </div>
//     )
// }

export default TodoItem