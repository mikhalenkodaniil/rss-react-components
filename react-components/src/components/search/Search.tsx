import React from 'react';
import SearchBtn from '../searchBtn/SearchBtn';
import SearchInput from '../searchInput/SearchInput';
import './search.css';

class Search extends React.Component {
  render() {
    return (
      <>
        <section className="search__section">
          <SearchInput />
          <SearchBtn />
        </section>
      </>
    );
  }
}

export default Search;
