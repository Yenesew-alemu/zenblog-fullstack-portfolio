// /client/src/components/SearchForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to the search results page with the query as a parameter
      navigate(`/search?q=${query}`);
      setQuery(''); // Optional: clear the form after searching
    }
  };

  return (
    <form onSubmit={handleSearch} className="mt-3">
      <input 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit"><i className="bi bi-search"></i></button>
    </form>
  );
}

export default SearchForm;