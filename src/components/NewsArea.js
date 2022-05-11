import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsArea extends Component {
  render() {
    return (
      <div className='container my-3'>
        <NewsItem/>
      </div>
    )
  }
}

export default NewsArea
