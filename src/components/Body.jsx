import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const Body = ({ notes, setNotes, onDelete, onArchive, onAdd }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput onAdd={onAdd} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} setNotes={setNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <NoteList notes={archivedNotes} setNotes={setNotes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
};

export default Body;
