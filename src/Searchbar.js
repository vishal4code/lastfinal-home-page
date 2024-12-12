import React from 'react';
import './Searchbar.css';

function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search for something here..." />
      <i className="fas fa-search"></i>
    </div>
  );
}

export default SearchBar;