import React from "react";

const Search = ({ onSearch, searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearchTerm(searchText);
    onSearch(searchText);
  };

  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan ..." value={searchTerm} onChange={handleChange} />
    </div>
  );
};

export default Search;
