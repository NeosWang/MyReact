import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, err} = this.props;
    return (
      <div>
        <div className="row">
          {
            isFirst? <h2>Welcome, please input keyword</h2>:
            isLoading? <h2>Loading......</h2>:
            err? <h2 style={{color:'red'}}> {err }</h2>:
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