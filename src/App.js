// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext'; // 引入 LanguageProvider
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Listings from './components/Listings';
// import Reviews from './components/Reviews';
import Social from './components/Social';
import Footer from './components/Footer';
import FeaturedListings from './components/FeaturedListings';
import Blog from './components/Blog'; 
import BlogDetail from './components/BlogDetail';
import HomeEvaluationForm from './components/HomeEvaluationForm';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Routes>
        {/* Homepage route with all existing components */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Social />
              <Footer />
            </>
          }
        />
        {/* Featured Listings route */}
        <Route path="/featured-listings" element={<FeaturedListings />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/home-evaluation" element={<HomeEvaluationForm />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
