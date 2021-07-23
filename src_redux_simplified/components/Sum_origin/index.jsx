import React, { Component } from 'react'

export default class Sum extends Component {

  state = {
    sum: 0
  }

  increment = () => {
    const { value } = this.selectedNumber
    const { sum } = this.state
    this.setState({ sum: sum + value*1 })
  }

  decrement = () => {
    const { value } = this.selectedNumber
    const { sum } = this.state
    this.setState({ sum: sum - value*1 })
  }

  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    const { sum } = this.state
    if(sum%2)    this.setState({ sum: sum + value*1 })
  }

  incrementAsync = () => {
    const { value } = this.selectedNumber
    const { sum } = this.state
    setTimeout(() => {
      this.setState({ sum: sum + value*1 })
    },800)
  }



  render() {
    return (
      <div>
        <h1>Sum: {this.state.sum}</h1>
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
