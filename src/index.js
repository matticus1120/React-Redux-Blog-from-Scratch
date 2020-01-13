import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { Router } from 'react-router';
import Routes from './routes';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(<App />, document.getElementById("root"));