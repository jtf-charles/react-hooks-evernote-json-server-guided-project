import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import ClickNoteProvider from "./context/ClickNoteProvider";


function App() {
  return (
    <div className="app">
      <Header />
      <ClickNoteProvider>
        <NoteContainer />
      </ClickNoteProvider>

    </div>
  );
}

export default App;
