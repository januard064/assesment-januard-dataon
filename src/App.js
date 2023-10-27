import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './component/layout/layout';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <Routes>
            <Route path='*' element={<LoginPage />} />
            <Route path={`/news-page`} element={<NewsPage />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
