import React from "react";
import ClickNoteContext from "./context/ClickNoteContext";
import { useContext } from "react";

function NoteItem({item}) {
const { setSelectedNote } = useContext(ClickNoteContext);
//console.log("bonjour")
  return (
    <li onClick={() => setSelectedNote(item)}>
      <h2>{item.title}</h2>
      <p>{item.body.slice(0,10)}...</p>
    </li>
  );

  

}

export default NoteItem;
