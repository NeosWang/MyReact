import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/sum_action'

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
    this.props.incrementAsync(value * 1,800)
  }

  render() {
    return (
      <div>
        <h1>Sum: {this.props.sum}</h1>
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


// // the return as props to UI component
// const mapStateToProps = state => ({ sum: state })

// // function to manipulate props
// const mapDispatchToProps = dispatch => (
//   {
//     increment: (data) => dispatch(createIncrementAction(data)),
//     decrement: (data) => dispatch(createDecrementAction(data)),
//     incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
//   }
// )

// export default connect(mapStateToProps, mapDispatchToProps)(SumUI)


// simplify, auto dispatch
export default connect(
  state=>({sum:state}),
  {
    increment:createIncrementAction, //function from action
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }
)(Sum)



