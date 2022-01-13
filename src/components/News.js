import React, {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  // document.title = {props.category}-NewsMonkey;

  const updateNews=async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=72bc5fc774594e35a211c6fd69ac2fdf&page=${
      page}&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(true);
  };

  useEffect(() => {
    updateNews();
  }, []);


  const handlePreviousCick = async () => {
    setPage(page-1);
    updateNews();
  };

  const handleNextCick = async () => {
    setPage(page+1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=72bc5fc774594e35a211c6fd69ac2fdf&page=${
      page+1}&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    debugger;
    console.log(articles);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    return '';
  };


  return (
    <>
      <h1 className="text-center">NewsMonkey-Top headlines from {props.category}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !==totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={ element.description }
                  imgUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}/>
              </div>;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: '6',
  category: 'General',

};
News.propsTpes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
