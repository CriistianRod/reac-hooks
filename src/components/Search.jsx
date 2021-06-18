import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <section className="Search">
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </section>
  )
}

export default Search;
