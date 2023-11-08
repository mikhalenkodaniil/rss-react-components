import { useState } from 'react';
import './search.css';

function Search() {
  localStorage.setItem('name', '');
  const [name, setName] = useState(
    localStorage.getItem('name') ? localStorage.getItem('name') : ''
  );

  function storageSetItem() {
    localStorage.setItem('name', name ? name : '');
  }
  return (
    <>
      <section className="search__section">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name ? name : ''}
          className="search__inp"
          placeholder="Search your people in StarWars"
        ></input>
        <button className="search__btn" onClick={storageSetItem}>
          Search
        </button>
      </section>
    </>
  );
}
export default Search;
