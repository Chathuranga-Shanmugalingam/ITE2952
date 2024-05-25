// C:\Users\User\c2\frontend\src\components\Header\SearchBar.jsx

import { useState } from 'react';
import '../../styles/SearchBar.css'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform search action here
    console.log('Search for:', searchQuery);
    // You can implement your search logic or send the search query to the server
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;

