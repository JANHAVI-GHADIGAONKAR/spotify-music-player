// src/components/Search.js
import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
      type="text" 
      value={searchTerm} 
      onChange={e => setSearchTerm(e.target.value)} 
      placeholder="Search Song, Artist" 
    />
  );
};

export default Search;
