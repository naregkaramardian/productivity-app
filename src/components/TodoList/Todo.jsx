import React from "react"




function Todo({ todo, index, completeTodo , removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "uncomplete" : "complete"}
        </button>
        <button onClick={()=> removeTodo(index)}>x</button>
      </div>
    )
  }

  
export default Todo


