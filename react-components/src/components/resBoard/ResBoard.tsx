import Card from '../card/Card';
import { IResults } from '../../interfaces';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { IPageOpen } from './IResBoard';
import Link from 'next/link';
import BigCard from '../bigCard/BigCard';

function ResBoard({ page, subPage }: IPageOpen) {
  const searchName = useSelector((state) => state.searchName);
  const [name, setName] = useState('');
  if (searchName !== name) {
    setName(searchName);
  }
  const data = useSelector((state) => state.data);
  const out = data?.map((el: IResults, id: number) => {
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
  if (out && data && subPage)
    return (
      <>
        <Link href={`../${page}/1`}>{out[page * 3]}</Link>
        <Link href={`../${page}/2`}>{out[page * 3 + 1]}</Link>
        <Link href={`../${page}/3`}>{out[page * 3 + 2]}</Link>
        <BigCard data={data[page * 3 + subPage - 1]} />
      </>
    );
  if (out && data)
    return (
      <>
        <Link href={`./${page}/1`}>{out[page * 3]}</Link>
        <Link href={`./${page}/2`}>{out[page * 3 + 1]}</Link>
        <Link href={`./${page}/3`}>{out[page * 3 + 2]}</Link>
      </>
    );
}

export default ResBoard;
