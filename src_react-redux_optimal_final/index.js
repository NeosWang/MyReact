import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  /*use Provider to let all container type childeren receive store*/ 
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);