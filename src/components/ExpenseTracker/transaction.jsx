import React from "react"

function Transaction({ transaction, index, removeTransaction }) {
  return (
    <div>
      {transaction.text} {transaction.amount}
      <button onClick={() => removeTransaction(index)}>X</button>
    </div>
  )
}

export default Transaction
