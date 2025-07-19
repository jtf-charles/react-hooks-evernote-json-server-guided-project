// src/components/ClickNoteProvider.js
import { useState, useMemo } from "react";
import ClickNoteContext from "./ClickNoteContext";

function ClickNoteProvider({ children }) {
  const [selectedNote, setSelectedNote] = useState(null);

  const value = useMemo(() => ({
    selectedNote,
    setSelectedNote,
  }), [selectedNote]);

  return (
    <ClickNoteContext.Provider value={value}>
      {children}
    </ClickNoteContext.Provider>
  );
}

export default ClickNoteProvider;
