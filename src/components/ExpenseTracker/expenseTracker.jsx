import React from "react"

// Hooks
import useStateWithLocalStorage from "../../Hooks/LocalStorage"

// components

import Transaction from "./transaction"
import AddTransactions from "./addTransactions"
import IncomeExpense from "./income-expense"

function ExpenseTracker() {
  const [transactions, setTransactions] = useStateWithLocalStorage(
    "MyTransactions"
  )

  const addtransaction = (text, amount) => {
    const newTransations = [...transactions, { text, amount }]
    setTransactions(newTransations)
  }

  const removeTransaction = (index) => {
    const newTransations = [...transactions]
    newTransations.splice(index , 1)
    setTransactions(newTransations)
  }

  return (
    <div>
      <h2>Expense Tracker</h2>  
      <IncomeExpense  transactions={transactions}/>
      {transactions.map((transaction, index) => (
        <Transaction key={index} index={index} transaction={transaction} removeTransaction={removeTransaction} />
      ))}
    
      <AddTransactions addtransaction={addtransaction} />
    </div>
  )
}

export default ExpenseTracker
