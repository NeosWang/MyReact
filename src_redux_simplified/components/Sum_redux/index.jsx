import React, { Component } from 'react'
import store from '../../redux/store'

export default class Sum extends Component {


  // can subscribe in index.js
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const { value } = this.selectedNumber
    store.dispatch({ type: 'increment', data: value * 1 })
  }

  decrement = () => {
    const { value } = this.selectedNumber
    store.dispatch({ type: 'decrement', data: value * 1 })
  }

  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    const sum = store.getState()
    if (sum % 2) store.dispatch({ type: 'increment', data: value * 1 })
  }

  incrementAsync = () => {
    const { value } = this.selectedNumber
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: value * 1 })
    }, 800)
  }



  render() {
    return (
      <div>
        <h1>Sum: {store.getState()}</h1>
        <select ref={c => this.selectedNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment when odd sum</button>
        <button onClick={this.incrementAsync}>async increment</button>
      </div>
    )
  }
}
