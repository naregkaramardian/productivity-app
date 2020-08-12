import React, { useState } from "react"

function AddTransactions({ addtransaction }) {
  const [text, setText] = useState("")
  const [amount, setamount] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text && !amount) {
      alert("please add text and amount")
      return
    } else if (!text) {
      alert("please add text")
      return
    } else if (!amount) {
      alert("please add amount")
      return
    }

    addtransaction(text, amount)
    setText("")
    setamount("")
  }

  return (
    <div>
      <h2>Add new transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>text</label>
        <br />
        <input
          type="text"
          placeholder={"add a transaction"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <label>Amount (negative-expense, Positive-income)</label>
        <br />
        <input
          type="number"
          placeholder={"add a transaction"}
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddTransactions
