import React from "react"

function Note({ index, note, removeNote }) {
  return (
    <div>
      {note.text}
      <button onClick={() => removeNote(index)}>x</button>
    </div>
  )
}

export default Note
