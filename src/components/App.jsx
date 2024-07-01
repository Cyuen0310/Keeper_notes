import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNote] = useState([]);

  const addNotes = (title, content) => {
    event.preventDefault();
    if (title.length > 0 && content.length > 0) {
      setNote((prev) => {
        return [...prev, { id: Date.now(), title, content }];
      });
    }
  };

  const deleteNotes = (id) => {
    setNote((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />

      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          delete={deleteNotes}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
