import './App.css';
import Results from './components/results/Results';
import Search from './components/search/Search';

function App() {
  return (
    <>
      <main className="app">
        <Search />
        <Results />
      </main>
    </>
  );
}
export default App;
