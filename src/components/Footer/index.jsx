import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>done 0</span> / all 2
                </span>
                <button className="btn btn-danger">remove all done tasks</button>
            </div>
        )
    }
}
