import React from "react"

function IncomeExpense({ transactions }) {
  let income = 0
  let expense = 0
  let balance = 0
  transactions.map((transaction) => {
    let tr = parseFloat(transaction.amount)
    if (tr > 0) {
      income += tr
    } else {
      expense += tr
    }
  })

  balance = income + expense
  return (
    <div>
      <p>Your Balance</p>
      <h2> ${balance.toFixed(2)}</h2>
      <p>Total income {income.toFixed(2)}</p>
      <p>Total expense {expense.toFixed(2)}</p>
    </div>
  )
}

export default IncomeExpense
