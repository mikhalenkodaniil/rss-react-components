import React from 'react';
import Card from '../card/Card';
import './results.css';
interface CardProps {
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  gender?: string;
}
class Results extends React.Component {
  state = {
    data: [],
    loading: true,
    name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
  };

  componentDidMount() {
    const url = 'https://swapi.dev/api/people/';
    fetch(url)
      .then((res) => res.json())
      .then((APIdata) => {
        const newData: CardProps = APIdata.results;
        this.setState({
          data: newData,
          loading: false,
          name: localStorage.getItem('name')
            ? localStorage.getItem('name')
            : '',
        });
        console.log(newData);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  render() {
    const { data, loading, name } = this.state;
    this.setState({
      data: data,
      loading: loading,
      name: localStorage.getItem('name') ? localStorage.getItem('name') : '',
    });
    if (loading) {
      return <div className="searching">Searching...</div>;
    }
    const out = data.map((el, id) => {
      if (!el.name.includes(name) && name !== '') return;
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
