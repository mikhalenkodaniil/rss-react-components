import { useEffect, useState } from 'react';
import ResBoard from '../resBoard/ResBoard';
import OutLinks from '../outLinks/OutLinks';
import { IResults } from '../../interfaces';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { IPageOpen } from '../resBoard/IResBoard';

function Results({ page, subPage }: IPageOpen) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    if (name !== localStorage.getItem('name')) {
      setName(localStorage.getItem('name'));
    }
  }, [name]);

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
      <Link href={'./'}>
        <section className="results__section">
          <ResBoard page={page} subPage={subPage} />
        </section>
        <OutLinks />
      </Link>
    </>
  );
}

export default Results;
