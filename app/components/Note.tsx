"use client"
import {MdDeleteForever} from 'react-icons/md'
export default  function Note({id, text, date , handleDelete} :any) {
  function deleteNote()
  {
    console.log("id in note.jsx" , id);
    handleDelete(id);

  }
  return (
    <div className="note">
      <span> {text} </span>
      <div className="note-footer">
        <small> {date} </small>
        <MdDeleteForever className='delete-icon' onClick={deleteNote} size='1.3em'/>
      </div>
    </div>
  )
} 
