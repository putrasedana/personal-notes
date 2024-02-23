import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import ArchieveList from "./ArchieveList";

const Body = ({ notes, onDelete, onArchive, onAdd }) => {
  return (
    <div className="note-app__body">
      <NoteInput onAdd={onAdd} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <ArchieveList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
};

export default Body;
