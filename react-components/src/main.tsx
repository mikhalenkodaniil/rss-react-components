import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { createStore } from 'redux';
import { IStore } from './interfaces';
import { Provider } from 'react-redux';

const defaultState: IStore = {
  searchName: localStorage.getItem('name'),
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
