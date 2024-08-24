// src/NewsCard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function NewsCard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5d17ccbd21134fd4a192f0d6b9701bef');
      const data = await response.json();
      setNews(data.articles);
    }

    fetchNews();
  }, []);

  return (
    <div className="container">
      <div className="row text-center my-4">
        {news.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="card h-100" style={{ width: '18rem' }}>
              <img className="card-img-top" src={item.urlToImage || '/assets/DefaultNews.png'} alt="News Image" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <hr />
                <div className="alert alert-info m-2">
                  Created by {item.author} <br />
                  At {item.publishedAt}
                </div>
                <div className="d-flex justify-content-center mt-auto">
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark mx-1">Go to Source</a>
                  <Link 
                        to="/details"
                        state={{
                          title: item.title,
                          author: item.author,
                          publishedAt: item.publishedAt,
                          description: item.description,
                          content: item.content,
                          urlToImage: item.urlToImage || '/assets/DefaultNews.png'
                        }}
                        className="btn btn-secondary mx-1"
                      >
                  Details
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCard;
