import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: 'msg 1' },
      { id: '02', title: 'msg 2' },
      { id: '03', title: 'msg 3' }
    ]
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/*pass params*/}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/*get params*/}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

 
      </div>
    )
  }
}
