import BigCard from '../bigCard/BigCard';
import Card from '../card/Card';
import './resBoard.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { IResults, BigCardProps } from '../../interfaces';


interface CardData {
  data: BigCardProps[];
  name: string | null;
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
              <Link to={'./0/1'}>{out[0]}</Link>
              <Link to={'./0/2'}>{out[1]}</Link>
              <Link to={'./0/3'}>{out[2]}</Link>
              {<Outlet />}
            </>
          }
        ></Route>

        <Route
          path="0"
          element={
            <>
              <Link to={'./1'}>{out[0]}</Link>
              <Link to={'./2'}>{out[1]}</Link>
              <Link to={'./3'}>{out[2]}</Link>
              {<Outlet />}
            </>
          }
        >
          {' '}
          <Route path="1" element={<BigCard data={data[0]} />} />
          <Route path="2" element={<BigCard data={data[1]} />} />
          <Route path="3" element={<BigCard data={data[2]} />} />
        </Route>

        <Route
          path="2"
          element={
            <>
              <Link to={'./1'}>{out[3]}</Link>
              <Link to={'./2'}>{out[4]}</Link>
              <Link to={'./3'}>{out[5]}</Link>
              {<Outlet />}
            </>
          }
        >
          {' '}
          <Route path="1" element={<BigCard data={data[3]} />} />
          <Route path="2" element={<BigCard data={data[4]} />} />
          <Route path="3" element={<BigCard data={data[5]} />} />
        </Route>
        <Route
          path="3"
          element={
            <>
              <Link to={'./1'}>{out[6]}</Link>
              <Link to={'./2'}>{out[7]}</Link>
              <Link to={'./3'}>{out[8]}</Link>
              {<Outlet />}
            </>
          }
        >
          <Route path="1" element={<BigCard data={data[6]} />} />
          <Route path="2" element={<BigCard data={data[7]} />} />
          <Route path="3" element={<BigCard data={data[8]} />} />
        </Route>
        <Route
          path="4"
          element={
            <>
              <Link to={'./1'}>{out[9]}</Link>
              <div className="fakecard"></div>
              <div className="fakecard"></div>
              {<Outlet />}
            </>
          }
        >
          <Route path="1" element={<BigCard data={data[9]} />} />
        </Route>
      </Routes>
    </>
  );
}

export default ResBoard;
