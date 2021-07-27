import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementAsync,
} from '../../redux/actions/sum'

// UI component
class Sum extends Component {

  state = { others: 'shit' }
  increment = () => {
    const { value } = this.selectedNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.selectedNumber
    this.props.decrement(value * 1)
  }

  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    if (this.props.sum % 2) this.props.increment(value * 1)
  }

  incrementAsync = () => {
    const { value } = this.selectedNumber
    this.props.incrementAsync(value * 1, 800)
  }

  render() {
    return (
      <div>
        <h2>Sum component</h2>
        <h3>Sum: {this.props.sum}, number of person:{this.props.population}</h3>
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




// simplify, auto dispatch
export default connect(
  state => ({
    sum: state.sum,
    population: state.persons.length
  }),
  {
    increment, //function from action
    decrement,
    incrementAsync,
  }
)(Sum)



