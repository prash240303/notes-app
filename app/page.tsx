"use client"
import { useState, useEffect, use } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search"
import Header from './components/Header';

import { nanoid } from "nanoid"
export default function Home() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/04/2021"
    }
  ])


  //save data in local stoarage
  useEffect(()=>{
    localStorage.setItem('next-notes-app-data',JSON.stringify(notes) )
  }, [notes])

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

 

  const handleAddNote = (text: string) => {
    console.log(text)
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }



  function handleDelete(id: string) {
    console.log(id)
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }


  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <main className=" container ">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={setSearchText} />
          <NotesList handleAddNote={handleAddNote} handleDelete={handleDelete} notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText))} />
        </main>
      </div>
    </>
  )
}
