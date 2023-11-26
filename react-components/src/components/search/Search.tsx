import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'));
    }
  }, []);
  function storageSetItem() {
    localStorage.setItem('name', name ? name : '');
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
