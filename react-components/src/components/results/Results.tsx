import Card from '../card/Card';
import { useState } from 'react';
import './results.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
  const out = data.map((el: IResults, id: number) => {
    if (!el.name.includes(name ? name : '') && name !== '') return;
    return (
      <div key={id}>
        <Card
          name={el.name}
          height={el.height}
          mass={el.mass}
          hair_color={el.hair_color}
          skin_color={el.skin_color}
          eye_color={el.eye_color}
          gender={el.gender}
        />
      </div>
    );
  });
  const outLinks = data.map((el, id) => {
    if (id === 0)
      return (
        <Link key={`linkKey${1}`} className="results__link" to="/">
          1
        </Link>
      );
    if ((id + 1) % 3 === 0 && out[id]) {
      const x = (id + 1) / 3 + 1;
      return (
        <Link key={`linkKey${x}`} className="results__link" to={`/${x}`}>
          {x}
        </Link>
      );
    }
  });
  return (
    <>
      <BrowserRouter>
        <section className="results__section">
          <Routes>
            <Route
              index
              element={
                <>
                  {out[0]}
                  {out[1]}
                  {out[2]}
                </>
              }
            />
            <Route
              path="2"
              element={
                <>
                  {out[3]}
                  {out[4]}
                  {out[5]}
                </>
              }
            />
            <Route
              path="3"
              element={
                <>
                  {out[6]}
                  {out[7]}
                  {out[8]}
                </>
              }
            />
            <Route path="4" element={<>{out[9]}</>} />
          </Routes>
        </section>
        <div className="results__links__section">{outLinks}</div>
      </BrowserRouter>
    </>
  );
}

export default Results;
