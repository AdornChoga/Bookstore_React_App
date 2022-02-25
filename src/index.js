import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/navbar/Navbar';
import View from './view/View';
import reportWebVitals from './reportWebVitals';

/* eslint-disable react/jsx-key */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <View />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
