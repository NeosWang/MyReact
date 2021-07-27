import React, { Component } from 'react'
import Sum from './containers/Sum'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sum/>
        <hr/>
        <Person/>
      </div>
    )
  }
}

