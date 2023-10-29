import React from 'react';
import './search.css';
class Search extends React.Component {
  state = {
    name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
  };
  render() {
    const name = this.state.name ? this.state.name : '';
    function storageSetItem() {
      localStorage.setItem('name', name);
    }
    return (
      <>
        <section className="search__section">
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            value={name}
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
}

export default Search;
