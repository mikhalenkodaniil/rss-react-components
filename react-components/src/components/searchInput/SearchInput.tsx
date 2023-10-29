import React from 'react';
import './searchInput.css';

class SearchInput extends React.Component {
  render() {
    return (
      <>
        <input
          className="search__inp"
          placeholder="Search your people in StarWars"
        ></input>
      </>
    );
  }
}

export default SearchInput;
