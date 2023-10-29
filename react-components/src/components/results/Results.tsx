import React from 'react';
import Card from '../card/Card';
import './results.css';

class Results extends React.Component {
  render() {
    return (
      <section className="results__section">
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}

export default Results;
