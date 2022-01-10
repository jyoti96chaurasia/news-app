import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
      let {title,description,imgUrl,url} = this.props
    return (
      <div className="my-3">
        <div className="card" style={{width : "18rem"}}>
          <img src = { !imgUrl ? "https://cdn.abcotvs.com/dip/images/11451351_011022-wabc-ap-tremont-bronx-fire-img.jpg": imgUrl} alt="..." className="card-img-top" onerror="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={url} target="_blank"  className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;


