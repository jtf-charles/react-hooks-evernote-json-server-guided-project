import React from "react";

function NoteItem({item}) {
//console.log("bonjour")
  return (
    <li>
      <h2>{item.title}Bonjour</h2>
      <p>{item.body.slice(0,10)}...</p>
    </li>
  );
}

export default NoteItem;
