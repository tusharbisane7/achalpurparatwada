
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.scss';

export default function SearchBar({
  placeholder = 'Search services, hospitals, schools, jobs and businesses...',
}) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) return;

    window.dispatchEvent(
      new CustomEvent('portal-search', {
        detail: searchQuery,
      })
    );
  };

  const handleClear = () => {
    setQuery('');
    window.dispatchEvent(
      new CustomEvent('portal-search', {
        detail: '',
      })
    );
  };

  return (
    <form className="portal-search" onSubmit={handleSubmit} role="search">
      <Search className="portal-search__icon" size={20} />

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label="Search the Achalpur Paratwada portal"
      />

      {query && (
        <button
          type="button"
          className="portal-search__clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}

      <button type="submit" className="portal-search__button">
        Search
      </button>
    </form>
  );
}
