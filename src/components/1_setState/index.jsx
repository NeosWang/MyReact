import React, { Component } from 'react'

export default class Demo extends Component {
  state = { sum: 0 }

  // // object
  // add = () => {
  //   const { sum } = this.state
  //   this.setState({ sum: sum + 1 },() => {
  //     console.log("@callback",this.state.sum)
  //   })
  //   console.log("@",this.state.sum)
  // }


  // function
  add = () => {
    // const { sum } = this.state
    this.setState((state, props) => {
      return { sum: state.sum + 1 }
    })
  }


  render() {
    return (
      <div>
        <h1>sum: {this.state.sum} </h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
