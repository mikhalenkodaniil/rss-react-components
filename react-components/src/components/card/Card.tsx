import React from 'react';
import './card.css';
interface CardProps {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  gender?: string;
}
class Card extends React.Component {
  render() {
    const data: CardProps = this.props.data;
    return (
      <>
        <section className="card">
          <div>Name: {data.name}</div>
          <div>Height: {data.height}</div>
          <div>Mass: {data.mass}</div>
          <div>Hair color: {data.hair_color}</div>
          <div>Skin color: {data.skin_color}</div>
          <div>Eye color: {data.eye_color}</div>
          <div>Gender: {data.gender}</div>
        </section>
      </>
    );
  }
}

export default Card;
