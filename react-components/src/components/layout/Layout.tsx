import React from 'react';
import Search from '../search/Search';
import Results from '../results/Results';

const Layout: React.FC = () => {
  const page = 0;
  const subPage = 0;
  return (
    <>
      <main className="app">
        <Search />
        <Results page={page} subPage={subPage} />
      </main>
    </>
  );
};

export default Layout;
