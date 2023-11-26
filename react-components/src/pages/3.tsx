import React from 'react';
import Search from '../components/search/Search';
import Results from '../components/results/Results';

const Layout: React.FC = () => {
  const page = 3;
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
