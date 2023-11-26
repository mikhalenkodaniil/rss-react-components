import React from 'react';
import Search from '../search/Search';
import Results from '../results/Results';

const Layout: React.FC = () => {
  return (
    <>
      <main className="app">
        <Search />
        <Results />
      </main>
    </>
  );
};

export default Layout;
