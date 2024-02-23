import React from "react";
import Search from "./Search";

const Header = ({ onSearch, searchTerm, setSearchTerm }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Search onSearch={onSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default Header;
