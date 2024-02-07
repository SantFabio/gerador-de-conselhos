import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AdviceGenerator from './AdviceGenerator'
import { applyMiddleware, createStore } from 'redux';
import adviceReducer from './components/reducers/adviceReducer';
import { thunk} from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(adviceReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AdviceGenerator />
  </Provider>
  // </React.StrictMode>,
)
