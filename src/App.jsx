// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import EmailForm from './EmailForm';
import NewsDetails from './NewsDetails';
import NewsCard from './NewsCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="my-5">
          <Routes>
            <Route path="/" element={<NewsCard />} />
            <Route path="/details" element={<NewsDetails />} />
          </Routes>
          <div className="container">
            <div className="border border-secondary rounded" style={{ display: 'flex', width: '1000px', marginLeft: '60px', paddingBottom: '15px' }}>
              <EmailForm />
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
