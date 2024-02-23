import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { getInitialData } from "./utils/index";

const App = () => {
  const [notes, setNotes] = useState(getInitialData);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const searchNote = (searchText) => {
    setSearchTerm(searchText);
  };

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Header onSearch={searchNote} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Body notes={filteredNotes} onDelete={deleteNote} onArchive={archiveNote} onAdd={addNote} />
    </div>
  );
};

export default App;
