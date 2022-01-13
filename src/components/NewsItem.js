import React from 'react';

const NewsItem=(props)=>{
  const {title, description, imgUrl, url, author, date, source} = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left: '90%', zIndex: '1'}}>
          {source}

        </span>
        <img
          src={
              !imgUrl ?
                'https://cdn.abcotvs.com/dip/images/11451351_011022-wabc-ap-tremont-bronx-fire-img.jpg' :
                imgUrl
          }
          alt="..."
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{' '}

          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
                by {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
              Read more
          </a>
        </div>
      </div>
    </div>
  );
};


export default NewsItem;
