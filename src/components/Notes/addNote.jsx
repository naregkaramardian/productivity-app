import React, { useState } from "react"

function AddNote({addnote}) {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value) return
    addnote(value)
    setValue("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder={"add A Note"}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  )
}

export default AddNote
