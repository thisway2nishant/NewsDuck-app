import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsArea from './components/NewsArea'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <NewsArea pageSize={6}/>
        
      </div>
    )
  }
}

