import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'dinner', done: true },
      { id: '002', name: 'coding', done: false },
      { id: '003', name: 'snap', done: false },
      { id: '004', name: 'shopping', done: false }
    ]
  }

  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTotos = [todoObj, ...todos]
    this.setState({ todos: newTotos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}

