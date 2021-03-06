import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/*router*/}
          <Switch>
            <Route path="/home/news" component={News} />
            <Message path="/home/message" component={Message}/>
            <Redirect to="/home/message"/>
          </Switch>
        </div>
      </div>
    )
  }
}
