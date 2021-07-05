import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" />
                    <span>xxxxx</span>
                </label>
                <button className="btn btn-danger" style={{ display: 'none' }}>remove</button>
            </li>
        )
    }
}
