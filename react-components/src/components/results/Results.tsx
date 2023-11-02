import Card from '../card/Card';
import { useState } from 'react';
import './results.css';

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
  if (name != localStorage.getItem('name')) {
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
  return (
    <>
      <section className="results__section">{out}</section>
    </>
  );
}

export default Results;
