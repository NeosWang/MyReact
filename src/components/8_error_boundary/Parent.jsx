import React, { PureComponent } from 'react'
import Child from './Child'

export default class Parent extends PureComponent {

  state = {
    hasError: '' //if child has error
  }

  // triggered when child has error
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: error }
  }

  componentDidCatch(error, info){
    console.log('shit happens when rendering child')
    console.log('to do: count number of error, then to backend')
    console.log(error, info)
  }


  render() {
    return (
      <div>
        <h2>this is parent</h2>
        {this.state.hasError ? <h3>shit happens</h3> : <Child />}
      </div>
    )
  }
}
