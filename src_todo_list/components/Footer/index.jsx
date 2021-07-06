import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll=(event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAll=(params) => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props

        const doneCount = todos.reduce((prev, todo) => prev + todo.done , 0)

        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total !==0? true:false}/>
                </label>
                <span>
                    <span>done {doneCount}</span> / all {total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>remove all done tasks</button>
            </div>
        )
    }
}
