import React from "react"

// Hooks
import useStateWithLocalStorage from "../../Hooks/LocalStorage"

// Components
import Todo from "./Todo"
import TodoForm from "./TodoForm"

function TodoList() {
  const [todos, setTodos] = useStateWithLocalStorage("myTodos")

  // const [todos, setTodos] = useState([
  //   {
  //     text: "My first Todo!",
  //     isCompleted: false,
  //   },
  //   {
  //     text: "My Second Todo!!",
  //     isCompleted: false,
  //   },
  //   {
  //     text: "My Third Todo!!!",
  //     isCompleted: false,
  //   },
  // ])

  function addTodo(text) {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  function completeTodo(index) {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  function removeTodo(index) {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="todo-list-component">
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoList
