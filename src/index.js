import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


const AppWrapper = () => (
  <Provider store={store}>
 	 <BrowserRouter>
    	<App />
    </BrowserRouter>
  </Provider>
);

render(<AppWrapper />, document.getElementById("root"));