import React, { useState } from "react"



function TodoForm({ addTodo }) {
    const [value, setvalue] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!value) return
      addTodo(value)
      setvalue("")
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </form>
    )
  }

  
export default TodoForm


