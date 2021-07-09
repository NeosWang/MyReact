import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'
// import axios from 'axios'

export default class App extends Component {

  state={
    isFirst:true, //first time open page
    isLoading:false,
    users:[],
    err:'', //error msg
  } //initial data

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    )
  }
}

