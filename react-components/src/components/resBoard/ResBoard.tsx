import Card from '../card/Card';
import './resBoard.css';
import { Route, Routes } from 'react-router-dom';

interface CardProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
}
interface CardData {
  data: CardProps[];
  name: string | null;
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
function ResBoard({ data, name }: CardData) {
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
    </>
  );
}

export default ResBoard;
