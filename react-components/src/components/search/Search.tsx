import { useState } from 'react';
// import './search.css';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();
  // !localStorage.getItem('name') ? localStorage.setItem('name', '') : 0;
  const [name, setName] = useState(
    // localStorage.getItem('name') ? localStorage.getItem('name') : ''
    ''
  );
  function storageSetItem() {
    // localStorage.setItem('name', name ? name : '');
    dispatch({ type: 'SET_NAME', payload: localStorage.getItem('name') });
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
