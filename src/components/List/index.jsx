import React, { Component } from 'react'
import PubSub from 'pubsub-js';



export default class List extends Component {

  state = {
    isFirst: true, //first time open page
    isLoading: false,
    users: [],
    err: '', //error msg
  } //initial data

  componentDidMount() {
    this.token = PubSub.subscribe('github', (msg,stateObj) => {
      this.setState(stateObj)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div>
        <div className="row">
          {
            isFirst ? <h2>Welcome, please input keyword</h2> :
              isLoading ? <h2>Loading......</h2> :
                err ? <h2 style={{ color: 'red' }}> {err}</h2> :
                  users.map((userObj) => {
                    return (
                      <div className="card" key={userObj.id}>
                        <a href={userObj.html_url} target="_blank" rel="noreferrer">
                          <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                        </a>
                        <p className="card-text">{userObj.login}</p>
                      </div>
                    )
                  })
          }
        </div>
      </div>
    )
  }
}
