import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class NewsArea extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=0aaa70fc059f4d69ba439fabedd33834&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    console.log(this.state.loading);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading: false})
    console.log(this.state.loading);
  }

  handleNextButton = async ()=>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=0aaa70fc059f4d69ba439fabedd33834&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      console.log(this.state.loading);
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false}) 
      console.log(this.state.loading);      
    }
  }

  handlePrevButton = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=0aaa70fc059f4d69ba439fabedd33834&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    console.log(this.state.loading);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles,
      loading: false})
      console.log(this.state.loading);   
  }

  render() {
    return (
      <div className='my-3'>
        <h2 className='text-center'>Top Headlines NewsMonkey</h2>
         { this.state.loading && <Spinner />}
        <div className='row'>
          {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>})
          }
        </div>
        <div className="container my-3 d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevButton}>&lt; Previous</button>
        <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextButton}>Next &gt;</button>
        </div>
      </div>
    )
  }
}

export default NewsArea
