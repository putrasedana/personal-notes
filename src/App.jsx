import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import { getInitialData } from "./utils/index";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const initialData = localStorage.getItem("notes");
    return initialData ? JSON.parse(initialData) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
    <>
      <Header onSearch={searchNote} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Body notes={filteredNotes} setNotes={setNotes} onDelete={deleteNote} onArchive={archiveNote} onAdd={addNote} />
    </>
  );
};

export default App;
