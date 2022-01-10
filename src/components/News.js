import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.getNewsFromApi(1)
  }

  getNewsFromApi = async (page_num) => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=72bc5fc774594e35a211c6fd69ac2fdf&page=${page_num}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
    });
  }

  handlePreviousCick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72bc5fc774594e35a211c6fd69ac2fdf&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextCick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72bc5fc774594e35a211c6fd69ac2fdf&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey-Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              class="btn btn-dark"
              onClick={this.handlePreviousCick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              class="btn btn-dark"
              onClick={this.handleNextCick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
