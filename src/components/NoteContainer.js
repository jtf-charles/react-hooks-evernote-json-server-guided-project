import React, { useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";
import NotesContext from "./context/NotesContext";
//import ClickNoteContext from "./ClickNoteContext";

function NoteContainer() {
  const [notes, setNotes] =useState([]);
  const [searchText, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }


  const searchNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(()=>{
    fetch("https:687e89c0efe65e520086f6b6.mockapi.io/notes")
    .then((res)=>res.json())
    .then((data)=>setNotes(data))
  },[])
  console.log(notes)
  return (
    <>
      <Search Search={searchText} onSearchChange={handleSearch} />
      <div className="container">
        <NotesContext.Provider value={{ searchNotes,notes, setNotes}}>
          <Sidebar />
          <Content />
        </NotesContext.Provider>
      </div>
    </>
  );
}

export default NoteContainer;
