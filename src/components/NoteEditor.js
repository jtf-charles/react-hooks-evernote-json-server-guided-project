import React from "react";
import { useContext,useState } from "react";
import ClickNoteContext from "./context/ClickNoteContext";
import NotesContext from "./context/NotesContext";

function NoteEditor({onDisable}) {
  const { selectedNote } = useContext(ClickNoteContext);
  const {notes,setNotes}=useContext(NotesContext)

  const [titleItem,setTitleItem]=useState(selectedNote.title);
  const [bodyItem,setBodyItem]=useState(selectedNote.body);

function handleTitleChange(e){
  setTitleItem(e.target.value);
};

function handleBodyChange(e){
  setBodyItem(e.target.value);
}

const editedNote={
  "title":titleItem,
  "body":bodyItem
}
function editNote() {
  fetch(`https://687e89c0efe65e520086f6b6.mockapi.io/notes/${selectedNote.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedNote),
  })
  .then((res) => res.json())
  .then((UpdateNote) => {
    setTitleItem(UpdateNote.title)
    setBodyItem(UpdateNote.body);
    setNotes(notes.map((note) =>
          note.id === UpdateNote.id ? UpdateNote : note
        ));
  });
}

function handleSubmit(e){
  e.preventDefault();
  editNote();
}

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" value={titleItem||""} onChange={handleTitleChange}/>
      <textarea name="body" value={bodyItem||""} onChange={handleBodyChange}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onDisable}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
