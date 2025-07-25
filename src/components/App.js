import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import ClickNoteProvider from "./context/ClickNoteProvider";
import Footer from "./Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <ClickNoteProvider>
        <NoteContainer />
      </ClickNoteProvider>
      <Footer  />
    </div>
  );
}

export default App;
