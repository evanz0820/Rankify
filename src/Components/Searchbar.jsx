import React from 'react';
import './Searchbar.css'; // Import CSS file for styling

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Searchbar;
