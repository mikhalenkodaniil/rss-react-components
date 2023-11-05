import { Link } from 'react-router-dom';
import './bigCard.css';
interface CardProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
  birth_year: string;
}
interface IBigCardProps {
  data: CardProps;
}
function BigCard({ data }: IBigCardProps) {
  console.log(data);
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
