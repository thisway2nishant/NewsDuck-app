import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className="container my-3">
        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={imgUrl} className="card-img-top" alt="..." style={{height: "218.521px"}} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
