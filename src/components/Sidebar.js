import React from "react";
import NoteList from "./NoteList";
import { useContext} from "react";
import NotesContext from "./context/NotesContext";

function Sidebar() {
  const {notes, setNotes} = useContext(NotesContext);

  const DefaultNote = {
    "title": "Default",
    "body": "placeholder"
  };

  function addDefaultNote() {
  fetch("https://687e89c0efe65e520086f6b6.mockapi.io/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(DefaultNote),
  })
  .then((res) => res.json())
  .then((newNote) => {
    setNotes([...notes, newNote]);
  });
}

 function handleClick(){
  //console.log("Good")
  addDefaultNote();
 }
  return (
    <div className="master-detail-element sidebar">
      <NoteList />
      <button onClick={handleClick}>New</button>
    </div>
  );
}

export default Sidebar;
