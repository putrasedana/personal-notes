import React from "react";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils/index";
import ArchieveButton from "./ArchieveButton";

const NoteItem = ({ note, onDelete, onArchive }) => {
  const { id, title, body, createdAt, archived } = note;
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchieveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
};

export default NoteItem;
