import './card.css';
interface CardProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  gender: string;
}
function Card({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  gender,
}: CardProps) {
  return (
    <>
      <section className="card">
        <div>Name: {name}</div>
        <div>Height: {height}</div>
        <div>Mass: {mass}</div>
        <div>Hair color: {hair_color}</div>
        <div>Skin color: {skin_color}</div>
        <div>Eye color: {eye_color}</div>
        <div>Gender: {gender}</div>
      </section>
    </>
  );
}

export default Card;
