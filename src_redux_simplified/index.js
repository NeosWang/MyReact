import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/sum_reducer'

ReactDOM.render(
  <App />,document.getElementById('root')
);

store.subscribe(() => {
  ReactDOM.render(
    <App />,document.getElementById('root')
  );
})
