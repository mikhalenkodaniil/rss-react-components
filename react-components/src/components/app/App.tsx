import './App.css';
import Results from '../results/Results';
import Search from '../search/Search';
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const dispatch = useDispatch();
  // const searchName = useSelector(state => state.searchName);
  // console.log(searchName)
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
