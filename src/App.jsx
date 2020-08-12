import React from "react"
import "./App.css"

// Components
import TodoList from "./components/TodoList/TodoList"
import Notes from "./components/Notes/notes"
import ExpenseTracker from './components/ExpenseTracker/expenseTracker'
function App() {
  return (
    <div className="App">
      <TodoList />
      <Notes />
      <ExpenseTracker />
    </div>
  )
}



export default App
