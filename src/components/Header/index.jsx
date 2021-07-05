import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    handleKeyUp = (event) => {
        const { target, keyCode } = event
        if (keyCode !== 13) return
        if (target.value.trim()==='') {
            alert('empty not valid')
            return
        }
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value=''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="input task name, press enter to confirm" />
            </div>
        )
    }
}
