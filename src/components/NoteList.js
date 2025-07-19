import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import NotesContext from "./context/NotesContext";

function NoteList() {
const {searchNotes}=useContext(NotesContext)

  return (
    <ul>
      {/* Render list of notes here... */}
      {searchNotes.map((note)=>{
        return <NoteItem key={note.id} item={note}/>
        //console.log(note)
      })}
    </ul>
  );
}

export default NoteList;
