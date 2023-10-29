import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    return (
      <>
        <section className="card">
          <div>Name: Luke Skywalker</div>
          <div>Height:</div>
          <div>Mass:</div>
          <div>Hair color:</div>
          <div>Skin color:</div>
          <div>Eye color:</div>
          <div>Gender:</div>
        </section>
      </>
    );
  }
}

export default Card;
