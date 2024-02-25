import React, { useState } from "react";

const DeleteButton = ({ onDelete, id }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setShowWarning(false);
  };

  return (
    <>
      <button className="note-item__delete-button" onClick={() => setShowWarning(true)}>
        Hapus
      </button>
      {showWarning && (
        <div className="popup-wrapper">
          <div className="warning-modal">
            <div className="warning-modal__content">
              <p>Yakin ingin menghapus catatan ini?</p>
              <button onClick={handleDelete}>Ya</button>
              <button onClick={() => setShowWarning(false)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteButton;
