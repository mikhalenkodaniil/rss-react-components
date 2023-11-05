import { useState } from 'react';
import './results.css';
import { BrowserRouter } from 'react-router-dom';
import ResBoard from '../resBoard/ResBoard';
import OutLinks from '../outLinks/OutLinks';

interface IData {
  results: IResults[];
}
interface IResults {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  birth_year: string;
}

function Results() {
  const [name, setName] = useState(
    localStorage.getItem('name') ? localStorage.getItem('name') : ''
  );
  if (name !== localStorage.getItem('name')) {
    setName(localStorage.getItem('name') ? localStorage.getItem('name') : '');
    console.log(name);
  }
  const [data, setData] = useState<IResults[]>([]);
  const url = 'https://swapi.dev/api/people/';
  fetch(url)
    .then((res) => res.json())
    .then((APIdata: IData) => {
      if (!data[0]) {
        setData(APIdata.results);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  if (!data[0]) {
    return <div className="searching">Searching...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <section className="results__section">
          <ResBoard data={data} name={name} />
        </section>
        <OutLinks data={data} name={name} />
      </BrowserRouter>
    </>
  );
}

export default Results;
