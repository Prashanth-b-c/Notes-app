import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const store = configureStore()

console.log('state', store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

