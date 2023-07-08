"use client"

import { useState } from "react"
export default function AddNotes({handleAddNote } :any) {

  const [noteText, setNoteText] = useState("")
  const [charCount, setCharCount] = useState(200);
  function handleText(event:any) {
    var regex = /\s+/gi;

    const text = event.target.value
    setNoteText(event.target.value )
    setCharCount(text.replace(regex, '').length) 
  }
  function handleSave()
  {
    handleAddNote(noteText)
     setNoteText("")
  }
  return (
    <div className='note new'>
      <textarea rows={8} cols={10} value={noteText} placeholder='type too add a note...' onChange={handleText}>


      </textarea>
      <div className='note-footer'>
        <small>{200-charCount} words remaining </small>
        <button onClick={handleSave} className='save'>Save</button>
      </div>
    </div>
  )
}
