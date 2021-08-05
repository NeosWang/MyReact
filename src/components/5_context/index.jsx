import React, { Component } from 'react'
import './index.css'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
  state = { username: 'tom', age: '18' }
  render() {
    const { username, age } = this.state
    return (
      <div className="parent">
        <h3>This is A</h3>
        <h4>username: {username}</h4>
        <Provider value={{ username, age }}> {/* must use key word "value" */}
          <B username={username} />
        </Provider>
      </div>
    )
  }
}


class B extends Component {
  render() {
    return (
      <div className="child">
        <h3>This is B</h3>
        <h4>get user name from A: {this.props.username}</h4>
        <C />
      </div>
    )
  }
}


class C extends Component {
  static contextType = MyContext
  render() {
    const { username, age } = this.context
    return (
      <div className="grandchild">
        <h3>This is C</h3>
        <h4>get user name from A: {username}, age:{age}</h4>
        <D />
      </div>
    )
  }
}

function D() {
  return (
    <div className="grandgrandchild">
      <h3>This is D</h3>
      <h4>get user name from A:
        <Consumer>
          {
            value =>`${value.username}, age: ${value.age}`
          }
        </Consumer>
      </h4>
    </div>
  )
}
