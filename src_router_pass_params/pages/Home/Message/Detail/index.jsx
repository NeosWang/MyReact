import React, { Component } from 'react'


const detailData =[
  {id:'01', content:'hello world'},
  {id:'02', content:'react'},
  {id:'03', content:'angular'},
]

export default class Detail extends Component {
  render() {
    console.log(this.props)
    const {id,title} = this.props.match.params
    const findResult = detailData.find((detailObj)=>{
      return detailObj.id ===id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>        
      </ul>
    )
  }
}
