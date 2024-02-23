import React from "react";

const ArchieveButton = ({ onArchive, id, archived }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
};

export default ArchieveButton;
