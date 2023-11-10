import { Link } from 'react-router-dom';
import './bigCard.css';
import { BigCardProps } from '../../interfaces';
interface IBigCardProps {
  data: BigCardProps;
}
function BigCard({ data }: IBigCardProps) {
  return (
    <>
      <div className="bigcard__section">
        <div className="bigcard__card">
          <Link to={'../'}>
            <button className="bigcard__btn">Close</button>
          </Link>
          <div>Name: {data.name}</div>
          <div>Height: {data.height}</div>
          <div>Mass: {data.mass}</div>
          <div>Hair color: {data.hair_color}</div>
          <div>Skin color: {data.skin_color}</div>
          <div>Eye color: {data.eye_color}</div>
          <div>Gender: {data.gender}</div>
          <div>Birth year: {data.birth_year}</div>
        </div>
      </div>
    </>
  );
}

export default BigCard;
