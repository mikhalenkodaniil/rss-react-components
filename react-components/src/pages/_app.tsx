import '../index.css';
import '../components/search/search.css';
import '../components/app/App.css';
import type { AppProps } from 'next/app';
import { createStore } from 'redux';
import { IStore } from '../interfaces';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

const defaultState: IStore = {
  searchName: null,
  data: [],
};

const reducer = (
  state = defaultState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, searchName: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    defaultState.searchName = localStorage.getItem('name')
      ? localStorage.getItem('name')
      : '';
  }, []);
  return (
    <>
      {' '}
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    </>
  );
}
