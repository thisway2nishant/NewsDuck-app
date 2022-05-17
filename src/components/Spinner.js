import React, { Component } from 'react'
import loading from './loading.gif'
export default class Spinner extends Component {
  render() {
    console.log('I m spinning');
    return (
      <div className='container my-3 text-center' style={{backgroundColor: 'white', width:'100vw', 
      height:'100px', zIndex: 111, opacity: 0.35}}>
        <img src={loading} alt='loading' className='my-4' ></img>
      </div>
    )
  }
}
