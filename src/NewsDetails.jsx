// src/NewsDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsDetails = () => {
  const location = useLocation();
  const { state } = location;

  const {
    title = 'No Title Available',
    author = 'Unknown Author',
    publishedAt = 'No Date Available',
    description = 'No Description Available',
    content = 'No Content Available',
    urlToImage 
  } = state || {}; 

  return (
    <div className="news-details container my-5">
      <h2 style={{ maxWidth: '650px', margin: '0 auto' }} className="bg-dark text-light py-3 text-center">{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <img src={urlToImage} alt="News" style={{ maxWidth: '400px', height: 'auto' }} />
      </div>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Published At:</strong> {publishedAt}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Content:</strong> {content}</p>
    </div>
  );
};

export default NewsDetails;
