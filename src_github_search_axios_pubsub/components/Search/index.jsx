import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search=() => {
    const {keyWorkElement:{value:keyword}} = this
    PubSub.publish('github',{isFirst:false, isLoading:true})

    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      response => {
        PubSub.publish('github',{isLoading:false, users:response.data.items})
      },
      error => {
        PubSub.publish('github',{isLoading:false, err:error.message})
      }
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c =>  this.keyWorkElement = c} type="text" placeholder="enter the name you search" />&nbsp;
              <button onClick={this.search}>Search</button>
            </div>
          </section>        
      </div>
    )
  }
}
