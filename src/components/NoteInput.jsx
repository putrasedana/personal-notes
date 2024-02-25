import React, { useState } from "react";
import { showFormattedDate } from "../utils";

const NoteInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charLimit, setCharLimit] = useState(50);
  const [warning, setWarning] = useState("");

  const handleTitleChange = (event) => {
    const newTitle = event.target.value.slice(0, 50);
    const remainingChars = 50 - newTitle.length;

    setTitle(newTitle);
    setCharLimit(remainingChars);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      setWarning("Judul dan isi catatan tidak boleh kosong!");
      setTimeout(() => {
        setWarning("");
      }, 3000);
      return;
    }

    const id = +new Date();
    const createdAt = showFormattedDate(new Date().toISOString());
    const archived = false;

    onAdd({ id, title, body, createdAt, archived });
    setTitle("");
    setBody("");
    setCharLimit(50);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      {warning && <p className="note-input__warning">{warning}</p>}
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">Sisa Karakter: {charLimit}</p>
        <input type="text" className="note-input__title" placeholder="Ini adalah judul..." value={title} onChange={handleTitleChange} />
        <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini..." cols="30" rows="10" value={body} onChange={handleBodyChange}></textarea>
        <button type="submit" className="">
          Buat
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
