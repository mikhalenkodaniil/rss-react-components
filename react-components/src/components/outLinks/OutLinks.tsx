import './outLinks.css';
import { Link } from 'react-router-dom';

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
}
function OutLinks({ data }: CardData) {
  const outLinks = data.map((el, id) => {
    if (id === 0)
      return (
        <Link key={`linkKey${1}`} className="results__link" to="/">
          1
        </Link>
      );
    if ((id + 1) % 3 === 0 && data[id]) {
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
      <div className="results__links__section">{outLinks}</div>
    </>
  );
}

export default OutLinks;
