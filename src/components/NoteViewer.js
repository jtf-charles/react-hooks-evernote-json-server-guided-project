import React from "react";
import ClickNoteContext from "./context/ClickNoteContext";
import { useContext } from "react";

function NoteViewer() {
  const { selectedNote } = useContext(ClickNoteContext);
  return (
    <>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
