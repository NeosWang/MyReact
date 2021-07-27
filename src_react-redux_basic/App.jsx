import React, { Component } from 'react'
import Sum from './containers/Sum'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sum store={store}/>
      </div>
    )
  }
}

