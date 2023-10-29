import './App.css';
import React from 'react';
import Results from './components/results/Results';
import Search from './components/search/Search';

class App extends React.Component {
  render() {
    return (
      <>
        <main className="app">
          <Search />
          <Results />
        </main>
      </>
    );
  }
}
export default App;
