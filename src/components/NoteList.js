import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import NotesContext from "./NotesContext";

function NoteList() {
const {notes, setNotes}=useContext(NotesContext)

  return (
    <ul>
      {/* Render list of notes here... */}
      {notes.map((note)=>{
        return <NoteItem key={note.id} item={note}/>
        //console.log(note)
      })}
    </ul>
  );
}

export default NoteList;
