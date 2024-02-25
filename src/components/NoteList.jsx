import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, setNotes, onDelete, onArchive }) => {
  return (
    <div>
      {notes.length === 0 && <p className="notes-list__empty-message">Tidak ada catatan</p>}
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} setNotes={setNotes} onDelete={onDelete} onArchive={onArchive} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
