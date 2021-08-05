import React, { PureComponent } from 'react'
import './index.css'
import C from '../1_setState'

export default class Prent extends PureComponent {
  render() {
    return (
      <div className='parent'>
        <h3>This is Parent</h3>
        <A render={(name) => <B name={name} />} />
        <A render={(name) => <C name={name} />} />
      </div>
    )
  }
}

class A extends PureComponent {
  state = { name: 'tom' }
  render() {
    const { name } = this.state
    return (
      <div className='a'>
        <h3>This is A</h3>
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends PureComponent {
  render() {
    return (
      <div className='b'>
        <h3>This is B</h3>
        <h4>name: {this.props.name}</h4>
      </div>
    )
  }
}