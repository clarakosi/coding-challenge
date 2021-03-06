import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import linksReducer from './Reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(linksReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
