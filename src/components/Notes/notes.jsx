import React from "react"

// Hooks
import useStateWithLocalStorage from "../../Hooks/LocalStorage"

// Components
import Note from "./note"
import AddNote from "./addNote"

function Notes() {
  
  const [notes, setNotes] = useStateWithLocalStorage("myNotes")

  function addnote(text) {
    const newNotes = [...notes, { text, isCompleted: false, important: false }]
    setNotes(newNotes)
  }

  const removeNote = (index) => {
    const newNotes = [...notes]
    newNotes.splice(index , 1)
    setNotes(newNotes)
  }


  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note, index) => (
        <Note key={index} index={index} note={note} removeNote={removeNote}/>
      ))}

      <AddNote addnote={addnote} />
    </div>
  )
}

export default Notes
