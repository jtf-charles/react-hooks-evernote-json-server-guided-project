import React from "react";
import ClickNoteContext from "./context/ClickNoteContext";
import { useContext } from "react";
import NotesContext from "./context/NotesContext";

function NoteViewer({onEdit}) {
  const { selectedNote} = useContext(ClickNoteContext);
  const {notes}=useContext(NotesContext)
  const noteItem = notes.find((note) => note.id === selectedNote.id);

  return (
    <>
      <h2>{noteItem.title}</h2>
      <p>{noteItem.body}</p>
      <button onClick={onEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;
