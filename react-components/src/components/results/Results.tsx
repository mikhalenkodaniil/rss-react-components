import { useEffect, useState } from 'react';
import './results.css';
import { BrowserRouter, Link } from 'react-router-dom';
import ResBoard from '../resBoard/ResBoard';
import OutLinks from '../outLinks/OutLinks';
import { IResults } from '../../interfaces';
import { APIContext } from '../../APIContext';

function Results() {
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

  if (!data[0]) {
    return <div className="searching">Searching...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <APIContext.Provider value={data}>
          <Link to={'../'}>
            <section className="results__section">
              <ResBoard name={name} />
            </section>
            <OutLinks />
          </Link>
        </APIContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default Results;
