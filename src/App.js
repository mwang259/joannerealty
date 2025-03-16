// src/App.js
import React from 'react';
import { LanguageProvider } from './components/LanguageContext'; // 引入 LanguageProvider
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Listings from './components/Listings';
// import Reviews from './components/Reviews';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About />
      <Services />
      <Listings />
      <Social/>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
