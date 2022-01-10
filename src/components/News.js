import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imgUrl="https://cdn.cnn.com/cnnnext/dam/assets/220109130424-01-bronx-fire-0109-super-tease.jpg" />
          </div>

          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" />
          </div>
          
        </div>
      </div>
    );
  }
}

export default News;
