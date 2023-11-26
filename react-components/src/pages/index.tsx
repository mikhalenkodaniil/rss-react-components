import React from 'react';
import Search from '../components/search/Search';
import Results from '../components/results/Results';

const HomePage: React.FC = () => {
  return (
    <>
      <main className="app">
        <Search />
        <Results />
      </main>
    </>
  );
};

export default HomePage;
