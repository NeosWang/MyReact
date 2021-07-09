import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class Search extends Component {

  search = async () => {
    const { keyWorkElement: { value: keyword } } = this
    PubSub.publish('github', { isFirst: false, isLoading: true })



    //// this is the origin version, fetch is not working in older browser

    // fetch(`http://localhost:3000/api1/search/users2?q=${keyword}`).then(
    //   response => {
    //     console.log('success to connect')
    //     return response.json()   // return a promise
    //   },
    //   // error => {
    //   //   console.log('fail to connect', error)
    //   //   return new Promise(() => {})
    //   // }
    // ).then(
    //   response => {
    //     console.log('success to get data', response)
    //   },
    //   // error => {console.log('fail to get data', error)}
    // ).catch(
    //   error => console.log('error',error)  // handle all kinds of error in the end
    // )

    try {
      const response = await fetch(`http://localhost:3000/api1/search/users2?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('github', { isLoading: false, users: data.items })
    } catch (error) {
      PubSub.publish('github', { isLoading: false, err: error.message })
    }
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c => this.keyWorkElement = c} type="text" placeholder="enter the name you search" />&nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
