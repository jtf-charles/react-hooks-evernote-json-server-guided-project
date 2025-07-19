import React, { useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useState } from "react";
import NotesContext from "./NotesContext";

function NoteContainer() {
  const [notes, setNotes] =useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/notes")
    .then((res)=>res.json())
    .then((data)=>setNotes(data))
  },[])
  //console.log(notes)
  return (
    <>
      <Search />
      <div className="container">
        <NotesContext.Provider value={{ notes, setNotes}}>
          <Sidebar />
          <Content />
        </NotesContext.Provider>
        
      </div>
    </>
  );
}

export default NoteContainer;
