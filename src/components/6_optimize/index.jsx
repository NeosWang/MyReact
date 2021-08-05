import React, { PureComponent } from 'react'
import "./index.css"

export default class Parent extends PureComponent {

  state = { carName: 'Toyota', stus: ['a', 'b', 'c'] }

  changeCar = () => {
    this.setState({ carName: "Farrari" })
  }

  addZ = () => {
    // // incorrect, the address of obj didn't change
    // const {stus} = this.state
    // stus.unshift('Z')
    // this.setState({stus})

    const { stus } = this.state
    this.setState({ stus: ['Z', ...stus] })
  }

  render() {
    console.log('Parent--render')
    const { carName } = this.state
    return (
      <div className="parent">
        <h3>this is Parent</h3>
        {this.state.stus}<br/>
        <h4>car name:{carName}</h4>
        <button onClick={this.changeCar}>click change car</button>
        <button onClick={this.addZ}>add Z</button>
        <Child carName={carName} />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child--render')
    return (
      <div className="child">
        <h3>this is Child</h3>
        <h4>get car: {this.props.carName}</h4>
      </div>
    )
  }
}

