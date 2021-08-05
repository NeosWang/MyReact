import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users:'abc',
    // users: [
    //   { id: '001', name: 'tom', age: 18 },
    //   { id: '002', name: 'jerry', age: 17 },
    //   { id: '003', name: 'mike', age: 16 },
    // ]
  }
  render() {
    return (
      <div>
        <h2>this is child</h2>
        {
          this.state.users.map((userObj) => {
            return (
              <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
            )
          })
        }
      </div>
    )
  }
}
