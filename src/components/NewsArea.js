import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class NewsArea extends Component {

  static defaultProps = {
    pageSize: 6,
    category: 'general',
    lang: 'en'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    lang: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updatePage(){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.lang}&apikey=0aaa70fc059f4d69ba439fabedd33834&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading: false})
  }
  
  async componentDidMount(){
    this.updatePage();
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.lang}&apikey=0aaa70fc059f4d69ba439fabedd33834&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading: false})
  }

  handleNextButton = async ()=>{
      await this.setState({page: this.state.page+1});
      this.updatePage();
      
      // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.lang}&apikey=0aaa70fc059f4d69ba439fabedd33834&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
      // this.setState({loading: true});
      // console.log(this.state.loading);
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // console.log(parsedData);
      // this.setState({
      //   page: this.state.page + 1,
      //   articles: parsedData.articles,
      //   loading: false}) 
      // console.log(this.state.loading);      
    
  }

  handlePrevButton = async ()=>{
    await this.setState({page: this.state.page-1});
    this.updatePage();
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=${this.props.lang}&apikey=0aaa70fc059f4d69ba439fabedd33834&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page -1,
    //   articles: parsedData.articles,
    //   loading: false})  
  }

  render() {
    return (
      <div className='my-3'>
        <h2 className='text-center' style={{marginTop: '80px'}}>Top Headlines NewsMonkey</h2>
         { this.state.loading && <Spinner />}
        <div className='row'>
          {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
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
