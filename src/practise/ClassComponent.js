import React, { Component } from 'react'

import "./style.css";
export default class ClassComponent extends Component {

  render() {
    return (
      <div className='container2'>
          <h1>This is created using ClassComponent </h1>
          <p >This is done using external css</p>
          <p style={{color:"white"}}>This is done using internal css</p>

    </div>
      
    )
  }
}
