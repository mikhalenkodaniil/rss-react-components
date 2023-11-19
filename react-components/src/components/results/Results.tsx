import { useEffect, useState } from 'react';
import './results.css';
import { BrowserRouter, Link } from 'react-router-dom';
import ResBoard from '../resBoard/ResBoard';
import OutLinks from '../outLinks/OutLinks';
import { IResults } from '../../interfaces';
import { useDispatch } from 'react-redux';

function Results() {
  const dispatch = useDispatch();
  const [name, setName] = useState(
    localStorage.getItem('name') ? localStorage.getItem('name') : ''
  );
  if (name !== localStorage.getItem('name')) {
    setName(localStorage.getItem('name') ? localStorage.getItem('name') : '');
  }
  const [data, setData] = useState<IResults[]>([]);
  const url = 'https://swapi.dev/api/people/';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
  dispatch({ type: 'SET_DATA', payload: data });
  if (!data[0]) {
    return <div className="searching">Searching...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Link to={'../'}>
          <section className="results__section">
            <ResBoard />
          </section>
          <OutLinks />
        </Link>
      </BrowserRouter>
    </>
  );
}

export default Results;
