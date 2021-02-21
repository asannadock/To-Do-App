import React from 'react'

function TodoItem({ task }) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{task}</p>
            <button>X</button>
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