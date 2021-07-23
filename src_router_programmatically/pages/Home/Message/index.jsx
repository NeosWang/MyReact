import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Detail from './Detail';

class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: 'msg 1' },
      { id: '02', title: 'msg 2' },
      { id: '03', title: 'msg 3' }
    ]
  }


  replaceShow = (id, title) => {
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    this.props.history.replace(`/home/message/detail`,
      {
        id: id,
        title: title
      })
  }

  pushShow = (id, title) => {
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    this.props.history.push(`/home/message/detail`,
      {
        id: id,
        title: title
      })
  }

  back=() => {
    this.props.history.goBack()
  }

  forward=() => {
    this.props.history.goForward()
  }

  go=() => {
    this.props.history.go(-2)
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
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}


                  {/*pass search*/}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* pass state */}
                  <Link to={{
                    pathname: '/home/message/detail',
                    state: {
                      id: msgObj.id,
                      title: msgObj.title
                    }
                  }}>{msgObj.title}</Link>

                  <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push</button>
                  <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace</button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/*get params*/}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}


        {/* search dont need declare */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* state dont need declare */}
        <Route path="/home/message/detail" component={Detail} />

        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>
        <button onClick={this.go}>go -2</button>
      </div>
    )
  }
}


export default withRouter(Message)