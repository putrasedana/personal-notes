import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/index";
import ArchieveButton from "./ArchieveButton";

const NoteItem = ({ note, setNotes, onDelete, onArchive }) => {
  const { id, title, body, createdAt, archived } = note;
  const formattedDate = showFormattedDate(createdAt);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedBody, setEditedBody] = useState(body);
  const charLimit = 50;

  const handleContentClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (event) => {
    const input = event.target.value.slice(0, charLimit);
    setEditedTitle(input);
  };

  const handleBodyChange = (event) => {
    setEditedBody(event.target.value);
  };

  const handleSave = () => {
    const editedNote = {
      ...note,
      title: editedTitle,
      body: editedBody,
    };
    const updatedNotes = JSON.parse(localStorage.getItem("notes")).map((note) => {
      if (note.id === id) {
        return editedNote;
      }
      return note;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setIsEditing(false);
    setNotes(updatedNotes);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditedBody(body);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      <div className="note-item__content" onClick={handleContentClick}>
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__body">{body}</p>
      </div>
      {isEditing && (
        <div className="popup-wrapper">
          <div className="edit-popup">
            <p className="note-input__title__char-limit">Sisa Karakter: {charLimit - editedTitle.length}</p>
            <input type="text" value={editedTitle} onChange={handleTitleChange} />
            <textarea value={editedBody} onChange={handleBodyChange} rows="8" />
            <button onClick={handleSave}>Simpan</button>
            <button onClick={handleCancel}>Batal</button>
          </div>
        </div>
      )}
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchieveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
};

export default NoteItem;
