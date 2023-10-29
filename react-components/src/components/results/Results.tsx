import React from 'react';
import Card from '../card/Card';
import './results.css';

class Results extends React.Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    const url = 'https://swapi.dev/api/people/';
    fetch(url)
      .then((res) => res.json())
      .then((APIdata) => {
        this.setState({ data: APIdata.results, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div className="searching">Searching...</div>;
    }

    const out = data.map((el, id) => {
      return (
        <div key={id}>
          <Card data={el} />
        </div>
      );
    });

    return <section className="results__section">{out}</section>;
  }
}

export default Results;
