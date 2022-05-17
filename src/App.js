import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsArea from './components/NewsArea'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<NewsArea key={'homePage'} pageSize={6} category='general' lang='en'/>}></Route>
            <Route exact path='/home' element={<NewsArea key={'general'} pageSize={6} category='general' lang='en'/>}></Route>
            <Route exact path='/business' element={<NewsArea key={'business'} pageSize={6} category='business' lang='en'/>}></Route>
            <Route exact path='/entertainment' element={<NewsArea key={'entertainment'} pageSize={6} category='entertainment' lang='en'/>}></Route>
            <Route exact path='/health' element={<NewsArea key={'health'} pageSize={6} category='health' lang='en'/>}></Route>
            <Route exact path='/science' element={<NewsArea key={'science'} pageSize={6} category='science' lang='en'/>}></Route>
            <Route exact path='/technology'element={<NewsArea key={'technology'} pageSize={6} category='technology' lang='en'/>}></Route>
            <Route exact path='/sports' element={<NewsArea key={'sports'} pageSize={6} category='sports' lang='en'/>}></Route>
          </Routes>        
        </div>
      </Router>
    )
  }
}

