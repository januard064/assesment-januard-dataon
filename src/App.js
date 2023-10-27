import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<LoginPage />} />
          <Route path={`/news-page`} element={<NewsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
