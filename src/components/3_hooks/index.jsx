import React, { Component } from 'react'
import ReactDom from 'react-dom'

// class Demo extends Component {
//   state = { sum: 0 }

//   myRef = React.createRef()

//   add = () => {
//     this.setState(state => ({ sum: state.sum + 1 }))
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState(state => ({ sum: state.sum + 1 }))
//     }, 1000);
//   }

//   unmount = () => {
//     ReactDom.unmountComponentAtNode(document.getElementById('root'))
//   }

//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>the sum: {this.state.sum}</h2>
//         <button onClick={this.add}>+1</button>
//         <button onClick={this.unmount}>Unmount</button>
//         <button onClick={this.show}>show input</button>
//       </div>
//     )
//   }
// }

function Demo() {
  const [sum, setSum] = React.useState(0)  // [state,func for update]
  const [name, setName] = React.useState('tom')

  const myRef = React.useRef()

  React.useEffect(() => {
    alert('updated')
  }, [name]) //second param [] contains what variable to monitor, equal componentDidUpdate

  React.useEffect(() => {
    let timer = setInterval(() => {
      setSum(sum => sum + 1)
    }, 1000);
    return () => clearInterval(timer);   // equal componentWillUnmount
  }, []) //equal componentDidMount

  function add() {
    setSum(sum + 1)
  }

  function changeName() {
    setName(name => 'Jerry')
  }

  function unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('root'))
  }


  function show() {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>the sum: {sum}</h2>
      <h2>name: {name}</h2>
      <button onClick={add}>+1</button>
      <button onClick={changeName}>change!</button>
      <button onClick={unmount}>Unmount</button>
      <button onClick={show}>show</button>
    </div>
  )
}


export default Demo