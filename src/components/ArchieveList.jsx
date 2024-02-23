import React from "react";
import ArchieveItem from "./ArchieveItem";

const ArchieveList = ({ notes, onDelete, onArchive }) => {
  const filteredArchivedNotes = notes.filter((note) => note.archived === true);

  return (
    <div>
      {filteredArchivedNotes.length === 0 && <p className="notes-list__empty-message">Tidak ada catatan</p>}
      <div className="notes-list">
        {filteredArchivedNotes.map((note) => (
          <ArchieveItem key={note.id} note={note} onDelete={onDelete} onArchive={onArchive} />
        ))}
      </div>
    </div>
  );
};

export default ArchieveList;
