import React, { useState } from 'react';
import { SearchBarWrap } from "../searchBar/SearchBarStyle";



const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const inputChangeHandler = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  const clearInput = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <SearchBarWrap>
      <div className='poketan-search'>
        <input
          type='text'
          placeholder='Search for your favourite Pokémon'
          value={searchTerm}
          onChange={inputChangeHandler}
        />
        {searchTerm && (
          <button className='clear-button' onClick={clearInput}>
          </button>
        )}
      </div>
    </SearchBarWrap>
  );
};

export default SearchBar;
