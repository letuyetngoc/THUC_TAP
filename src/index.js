import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux
import { rootReducer } from './redux/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
// redux-thunk
import thunk from 'redux-thunk';
// redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
