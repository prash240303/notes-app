"use client"
import React from 'react'
import Note from './Note'
import AddNotes from './AddNotes'
export default function ({ notes ,handleAddNote ,handleDelete }: any) {
    return (
        <div className='notes-list'>

            {notes.map((note: any) => {
                return <Note id={note.id} text={note.text} date = {note.date}  handleDelete= { handleDelete} />
            })}
            <AddNotes handleAddNote={handleAddNote}/>
        </div>
    )
}
