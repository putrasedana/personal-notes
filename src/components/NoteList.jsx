import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive }) => {
  const filteredNotes = notes.filter((note) => note.archived === false);

  return (
    <div>
      {filteredNotes.length === 0 && <p className="notes-list__empty-message">Tidak ada catatan</p>}
      <div className="notes-list">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
